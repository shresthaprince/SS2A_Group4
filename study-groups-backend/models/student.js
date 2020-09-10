const mongoose = require("mongoose");
const Joi = require("joi");
const { facultySchema } = require("./faculty");
const { courseSchema } = require("./course");

const studentSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  faculty: { type: facultySchema, required: true },
  course: { type: courseSchema, required: true },
  topic: { type: String },
  skills: { type: String },
  allocated: { type: Boolean },
});

const Student = mongoose.model("Students", studentSchema);

function validateStudent(student) {
  const schema = Joi.object({
    userId: Joi.string().required(),
    facultyId: Joi.string().required(),
    courseId: Joi.string().required(),
    topicId: Joi.string().required(),
    skills: Joi.string(),
  });
  return schema.validate(student);
}

exports.validateStudent = validateStudent;
exports.studentSchema = studentSchema;
exports.Student = Student;
