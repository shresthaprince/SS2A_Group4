const express = require("express");
const { Course } = require("../models/course");
const { Topic } = require("../models/topic");
const router = express.Router();
const { Student, validateStudent } = require("../models/student");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const { Faculty } = require("../models/faculty");
const { addStudentData, User } = require("../models/user");

router.get("/", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

router.get("/:id", async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) return res.status(404).send("Student does not exist");

  res.send(student);
});

router.post("/", [auth, admin], async (req, res) => {
  const { error } = validateStudent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let student = new Student({
    userId: req.body.userId,
    name: (await User.findById(req.body.userId)).name,
    faculty: await Faculty.findById(req.body.facultyId),
    course: await Course.findById(req.body.courseId),
    topic: (await Topic.findById(req.body.topicId)).title,
    skills: req.body.skills,
    tools: req.body.tools,
    //topics: await Topic.find({ _id: { $in: req.body.topicIds } }),
  });
  student = await student.save();

  await addStudentData(student);

  res.send(student);
});

router.put("/:id", [auth, admin], async (req, res) => {
  const { error } = validateStudent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const student = await Student.findByIdAndUpdate(
    req.params.id,
    {
      userId: req.body.userId,
      faculty: await Faculty.findById(req.body.facultyId),
      course: await Course.findById(req.body.courseId),
      topic: await Topic.findById(req.body.topicId),
      skills: req.body.skills,
      tools: req.body.tools,
      //topics: await Topic.find({ _id: { $in: req.body.topicIds } }),
    },
    { new: true }
  );
  if (!student) return res.status(404).send("Student does not exist");

  res.send(student);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const student = await Student.findByIdAndRemove(req.params.id);
  if (!student) return res.status(404).send("student does not exist");

  res.send(student);
});

module.exports = router;
