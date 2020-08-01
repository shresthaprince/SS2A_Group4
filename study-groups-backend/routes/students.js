const express = require("express");
const router = express.Router();
const Joi = require("Joi");

const students = [
  { id: 1, name: "Prince" },
  { id: 2, name: "Pratik" },
  { id: 3, name: "Rico" },
];

router.get("/", (req, res) => {
  res.send(students);
});

router.get("/:id", (req, res) => {
  const student = students.find(
    (student) => student.id === parseInt(req.params.id)
  );
  if (!student) return res.status(404).send("Student does not exist");
  res.send(student);
});

router.post("/", (req, res) => {
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const student = {
    id: students.length + 1,
    name: req.body.name,
  };
  students.push(student);
  res.send(student);
});

router.put("/:id", (req, res) => {
  const student = students.find(
    (student) => student.id === parseInt(req.params.id)
  );
  if (!student) return res.status(404).send("Student does not exist");

  const { error } = validate(student);
  if (error) return res.status(400).send(error.details[0].message);

  student.name = req.body.name;
  res.send(student);
});

router.delete("/:id", (req, res) => {
  const student = students.find(
    (student) => student.id === parseInt(req.params.id)
  );
  if (!student) return res.status(404).send("Student does not exist");

  const index = students.indexOf(student);
  students.splice(index, 1);

  res.send(student);
});

function validate(student) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(student);
}

module.exports = router;
