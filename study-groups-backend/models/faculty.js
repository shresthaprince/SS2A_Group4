const mongoose = require("mongoose");
const Joi = require("joi");

const facultySchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 8, maxlength: 100 },
});

const Faculty = mongoose.model("Faculties", facultySchema);

function validateFaculty(faculty) {
  const schema = Joi.object({
    title: Joi.string().min(8).max(100).required(),
  });
  return schema.validate(faculty);
}

exports.validateFaculty = validateFaculty;
exports.facultySchema = facultySchema;
exports.Faculty = Faculty;
