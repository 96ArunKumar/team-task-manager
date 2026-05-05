const router = require("express").Router();
const Task = require("../models/Task");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  const task = await Task.create(req.body);
  res.send(task);
});

router.get("/", auth, async (req, res) => {
  const tasks = await Task.find().populate("assignedTo project");
  res.send(tasks);
});

router.get("/overdue", auth, async (req, res) => {
  const now = new Date();

  const tasks = await Task.find({
    dueDate: { $lt: now },
    status: { $ne: "done" }
  });

  res.send(tasks);
});

module.exports = router;