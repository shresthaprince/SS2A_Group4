const express = require("express");
const router = express.Router();
const _ = require("lodash");

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
    name: `Group #${groups.length + 1}`,
    topic: req.body.topic,
    students:
      req.body.studentIds &&
      (await Student.find({ _id: { $in: req.body.studentIds } })),
    settings: req.body.settings,
  });
  group = await group.save();

  res.send(group);
});

router.post("/new", [auth, admin], async (req, res) => {
  await Group.deleteMany({});
  const students = await Student.find();
  await Student.updateMany(
    {},
    { $set: { allocated: true } },
    { multi: true },
    (err, writeResult) => {}
  );

  let groups = _.groupBy(students, "topic");
  //groups = groupBySkills(groups);

  let groupNumber = 0;

  Object.keys(groups).forEach(async (topic) => {
    const group = groups[topic];
    const studentIds = group.map((student) => student._id);

    const students = await Student.find({ _id: { $in: studentIds } });
    const preferredTopic = students[0].topic;

    let newGroup = new Group({
      number: ++groupNumber,
      name: `Group #${groupNumber}`,
      topic: preferredTopic,
      students,
      settings: { maxNumber: 4 },
    });
    newGroup = await newGroup.save();
  });

  res.send("Done");
});

router.put("/:id", auth, async (req, res) => {
  const { error } = validateGroup(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const group = await Group.findByIdAndUpdate(
    req.params.id,
    {
      number: req.body.number,
      name: req.body.name,
      topic: req.body.topic,
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

router.delete("/", [auth, admin], async (req, res) => {
  await Group.deleteMany({});

  await Student.updateMany(
    {},
    { $set: { allocated: false } },
    { multi: true },
    (err, writeResult) => {}
  );

  res.send("Deleted");
});

router.delete("/:id", auth, async (req, res) => {
  const group = await Group.findByIdAndRemove(req.params.id);
  if (!group) return res.status(404).send("group does not exist");

  res.send(group);
});

// function groupBySkills(groups) {
//   let result = {};
//   Object.keys(groups).forEach((topic) => {
//     let helper = {};
//     const group = groups[topic];

//     result = group.reduce((result, student) => {
//       key = topic + "-" + student.skills;

//       if (!result[topic]) {
//         result[topic] = [];
//         result[topic].push(student);
//         helper[key] = [];
//       } else if (helper[key]) {
//         if (!result[key]) {
//           result[key] = [];
//           result[key].push(student);
//         }
//       } else {
//         helper[key] = [];
//         result[topic].push(student);
//       }

//       return result;
//     }, result);
//   });
//   return result;
// }

module.exports = router;
