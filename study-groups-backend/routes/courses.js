const express = require("express");
const router = express.Router();
const { Course, validateCourse } = require("../models/course");
const { Faculty } = require("../models/faculty");
const auth = require("../middleware/auth");

router.get("/", async (req, res) => {
  const courses = await Course.find().sort("title");
  res.send(courses);
});

router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) res.status(404).send("Course does not exist");

  res.send(course);
});

router.post("/", auth, async (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) res.status(400).send(error.details[0].message);

  let course = new Course({
    title: req.body.title,
    faculty: await Faculty.findById(req.body.facultyId),
  });
  course = await course.save();

  res.send(course);
});

router.put("/:id", auth, async (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const course = await Course.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      faculty: await Faculty.findById(req.body.facultyId),
    },
    {
      new: true,
    }
  );
  if (!course) res.status(404).send("Course does not exist");

  res.send(course);
});

router.delete("/:id", auth, async (req, res) => {
  const course = await Course.findByIdAndRemove(req.params.id);
  if (!course) res.status(404).send("Course does not exist");

  res.send(course);
});

module.exports = router;
