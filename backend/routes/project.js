const router = require("express").Router();
const Project = require("../models/Project");
const auth = require("../middleware/auth");
const role = require("../middleware/role");

router.post("/", auth, role("admin"), async (req, res) => {
  const project = await Project.create({
    name: req.body.name,
    description: req.body.description,
    createdBy: req.user.id
  });

  res.send(project);
});

router.post("/add-member/:id", auth, async (req, res) => {
  const project = await Project.findById(req.params.id);
  project.members.push(req.body.userId);
  await project.save();

  res.send(project);
});

module.exports = router;