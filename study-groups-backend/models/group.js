const mongoose = require("mongoose");
const Joi = require("joi");
const { studentSchema } = require("./student");

const groupSchema = new mongoose.Schema({
  number: { type: Number, min: 1, required: true },
  name: { type: String },
  topic: { type: String },
  students: [{ type: studentSchema }],
  settings: {
    maxNumber: { type: Number, required: true },
  },
});

const Group = mongoose.model("Groups", groupSchema);

function validateGroup(group) {
  const schema = Joi.object({
    number: Joi.number().min(1),
    name: Joi.string().min(5).max(100),
    topic: Joi.string(),
    studentIds: Joi.array().items(Joi.string()), //group.settings.maxNumber
    settings: Joi.object().required(),
  });
  return schema.validate(group);
}

exports.validateGroup = validateGroup;
exports.groupSchema = groupSchema;
exports.Group = Group;
