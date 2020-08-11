const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");
const { studentSchema } = require("./student");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 512,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  password: { type: String, required: true, minlength: 5, maxlength: 1024 },
  isAdmin: { type: Boolean },
  student: { type: studentSchema },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
      isAdmin: this.isAdmin,
    },
    config.get("jwtPrivateKey")
  );
  return token;
};

const User = mongoose.model("Users", userSchema);

async function addStudentData(student) {
  await User.update(
    { _id: student.userId },
    {
      $set: {
        student: student,
      },
    }
  );
}

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(512).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required(),
    isAdmin: Joi.boolean(),
  });
  return schema.validate(user);
}

exports.validateUser = validateUser;
exports.userSchema = userSchema;
exports.User = User;
exports.addStudentData = addStudentData;
