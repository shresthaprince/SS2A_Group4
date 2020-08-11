const mongoose = require("mongoose");
const config = require("config");
const _ = require("lodash");
const { Student } = require("./models/student");
const { Group } = require("./models/group");

async function assignGroup() {
  await mongoose.connect(config.get("db"), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  const students = await Student.find();

  const groups = _.groupBy(students, "topic");
  Object.keys(groups).forEach(async (topic) => {
    group = groups[topic];
    const studentIds = group.map((student) => student._id);

    const currentGroup = await Group.find();
    let newGroup = new Group({
      number: currentGroup.length + 1,
      name: `Group #${currentGroup.length + 1}`,
      topic,
      students: await Student.find({ _id: { $in: studentIds } }),
      settings: { maxNumber: 4 },
    });
    await newGroup.save();
  });
}

assignGroup();
