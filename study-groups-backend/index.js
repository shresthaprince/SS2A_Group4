const Joi = require("@hapi/joi");
const express = require("express");
const app = express();

const students = [
  { id: 1, name: "Prince" },
  { id: 2, name: "Pratik" },
  { id: 3, name: "Rico" },
];

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/students", (req, res) => {
  res.send(students);
});

app.get("/api/students/:id", (req, res) => {
  const student = students.find(
    (student) => student.id === parseInt(req.params.id)
  );
  if (!student) return res.status(404).send("Student does not exist");
  res.send(student);
});

app.post("/api/students", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });
  const result = schema.validate(req.body);

  res.send(result);
});

app.listen(3000, () => console.log("Listening on port 3000"));
