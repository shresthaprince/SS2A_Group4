const express = require("express");
const router = express.Router();
const { Faculty, validateFaculty } = require("../models/faculty");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router.get("/", async (req, res) => {
  const faculties = await Faculty.find().sort("title");
  res.send(faculties);
});

router.get("/:id", async (req, res) => {
  const faculty = await Faculty.findById(req.params.id);
  if (!faculty) return res.status(404).send("Faculty does not exist");

  res.send(faculty);
});

router.post("/", [auth, admin], async (req, res) => {
  const { error } = validateFaculty(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let faculty = new Faculty({ title: req.body.title });
  faculty = await faculty.save();

  res.send(faculty);
});

router.put("/:id", auth, async (req, res) => {
  const { error } = validateFaculty(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const faculty = await Faculty.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title },
    { new: true }
  );
  if (!faculty) return res.status(404).send("Faculty does not exist");

  res.send(faculty);
});

router.delete("/:id", auth, async (req, res) => {
  const faculty = await Faculty.findByIdAndRemove(req.params.id);
  if (!faculty) return res.status(404).send("faculty does not exist");

  res.send(faculty);
});

module.exports = router;
