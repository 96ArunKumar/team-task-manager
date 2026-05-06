const router = require("express").Router();

const Task = require("../models/Task");

const auth = require("../middleware/auth");


// CREATE TASK
router.post("/", auth, async (req, res) => {

  const task = await Task.create(req.body);

  res.send(task);

});


// GET TASKS
router.get("/", auth, async (req, res) => {

  const tasks = await Task.find();

  res.send(tasks);

});


// UPDATE TASK
router.put("/:id", auth, async (req, res) => {

  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new:true }
  );

  res.send(updatedTask);

});


// DELETE TASK
router.delete("/:id", auth, async (req, res) => {

  await Task.findByIdAndDelete(req.params.id);

  res.send({
    message:"Task deleted"
  });

});


// OVERDUE TASKS
router.get("/overdue", auth, async (req, res) => {

  const now = new Date();

  const tasks = await Task.find({

    dueDate:{ $lt: now },

    status:{ $ne:"done" }

  });

  res.send(tasks);

});

module.exports = router;