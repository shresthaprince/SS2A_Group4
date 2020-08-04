const mongoose = require("mongoose");
const Joi = require("joi");
const { facultySchema } = require("./faculty");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 5, maxlength: 50 },
  faculty: { type: facultySchema, required: true },
});

const Course = mongoose.model("Courses", courseSchema);

function validateCourse(course) {
  const schema = Joi.object({
    title: Joi.string().min(5).max(50).required(),
    facultyId: Joi.string().required(),
  });
  return schema.validate(course);
}

exports.validateCourse = validateCourse;
exports.courseSchema = courseSchema;
exports.Course = Course;
