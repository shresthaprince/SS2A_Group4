const mongoose = require("mongoose");
const Joi = require("joi");
const { facultySchema } = require("./faculty");
const { courseSchema } = require("./course");
const { topicSchema } = require("./topic");

const studentSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  faculty: { type: facultySchema, required: true },
  courses: [{ type: courseSchema }],
  topics: [{ type: topicSchema }],
});

const Student = mongoose.model("Students", studentSchema);

function validateStudent(student) {
  const schema = Joi.object({
    userId: Joi.string().required(),
    facultyId: Joi.string().required(),
    courseIds: Joi.array().items(Joi.string()).min(4),
    topicIds: Joi.array().items(Joi.string()).min(2),
  });
  return schema.validate(student);
}

exports.validateStudent = validateStudent;
exports.studentSchema = studentSchema;
exports.Student = Student;
