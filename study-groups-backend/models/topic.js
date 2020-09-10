const mongoose = require("mongoose");
const Joi = require("joi");

const topicSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 8, maxlength: 100 },
  skills: {
    type: Array,
    // validate: {
    //   validator: function (v) {
    //     return v && v.length > 1;
    //   },
    //   message: "A topic should have atleast four recommended skillsets.",
    // },
  },
});

const Topic = mongoose.model("Topics", topicSchema);

function validateTopic(topic) {
  const schema = Joi.object({
    title: Joi.string().min(8).max(100).required(),
    skills: Joi.array().items(Joi.string()).min(2),
  });
  return schema.validate(topic);
}

exports.validateTopic = validateTopic;
exports.topicSchema = topicSchema;
exports.Topic = Topic;
