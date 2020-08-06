const mongoose = require("mongoose");
const Joi = require("joi");
const { studentSchema } = require("./student");

const groupSchema = new mongoose.Schema({
  number: { type: Number, min: 1, required: true },
  name: { type: String },
  students: [{ type: studentSchema }],
  settings: {
    maxNumber: { type: Number, required: true },
  },
});

const Group = mongoose.model("Groups", groupSchema);

function validateGroup(group) {
  const schema = Joi.object({
    number: Joi.number().min(1),
    name: Joi.string().required().min(5).max(100),
    studentIds: Joi.array().items(Joi.string()).max(group.settings.maxNumber), //group.settings.maxNumber
    settings: Joi.object().required(),
  });
  return schema.validate(group);
}

exports.validateGroup = validateGroup;
exports.groupSchema = groupSchema;
exports.Group = Group;
