const mongoose = require("mongoose");
const config = require("config");
const _ = require("lodash");
const { Student } = require("./models/student");
const { Group } = require("./models/group");

function initialiseGroups(noOfGroups, fullGroups, groupSize) {
  let groups = {};
  for (i = 1; i < noOfGroups; i++) {
    fullGroups-- <= 0
      ? (groups[`Group ${i}`] = new Array(groupSize - 1))
      : (groups[`Group ${i}`] = new Array(groupSize));
  }

  return groups;
}

function createStudentBuckets(students) {
  const studentsBucket = _.groupBy(students, "topic");

  Object.keys(studentsBucket).forEach((topic) => {
    const groupBySkills = _.groupBy(studentsBucket[topic], "skills");

    studentsBucket[topic] = groupBySkills;
  });

  return studentsBucket;
}

async function assignGroup() {
  await mongoose.connect(config.get("db"), {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

  const students = await Student.find();

  const groupSize = 4;
  const studentSize = students.length;

  const noOfGroups = studentSize / (groupSize - 1);
  const fullGroups = studentSize % (groupSize - 1);

  let groups = initialiseGroups(noOfGroups, fullGroups, groupSize);

  const studentsBucket = createStudentBuckets(students);

  console.log("No. of students", studentSize);
  console.log("Maximum group size", groupSize);
  console.log(studentsBucket);
  console.log(
    "Bucket length",
    Object.values(studentsBucket["Shopping App"]).flat().length
  );
}

assignGroup();
