const express = require("express");
const router = express.Router();
const { Group, validateGroup } = require("../models/group");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const { Student } = require("../models/student");

router.get("/", async (req, res) => {
  const groups = await Group.find().sort("number");
  res.send(groups);
});

router.get("/:id", async (req, res) => {
  const group = await Group.findById(req.params.id);
  if (!group) return res.status(404).send("Group does not exist");

  res.send(group);
});

router.post("/", [auth, admin], async (req, res) => {
  const { error } = validateGroup(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const groups = await Group.find();

  let group = new Group({
    number: groups.length + 1,
    name: req.body.name,
    students:
      req.body.studentIds &&
      (await Student.find({ _id: { $in: req.body.studentIds } })),
    settings: req.body.settings,
  });
  group = await group.save();

  res.send(group);
});

router.put("/:id", auth, async (req, res) => {
  const { error } = validateGroup(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const group = await Group.findByIdAndUpdate(
    req.params.id,
    {
      number: groups.length + 1,
      name: req.body.name,
      students:
        req.body.studentIds &&
        (await Student.find({ _id: { $in: req.body.studentIds } })),
      settings: req.body.settings,
    },
    { new: true }
  );
  if (!group) return res.status(404).send("group does not exist");

  res.send(group);
});

router.delete("/:id", auth, async (req, res) => {
  const group = await Group.findByIdAndRemove(req.params.id);
  if (!group) return res.status(404).send("group does not exist");

  res.send(group);
});

module.exports = router;
