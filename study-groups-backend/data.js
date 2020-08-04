const { Faculty } = require("./models/faculty");
const { Course } = require("./models/course");
const mongoose = require("mongoose");
const config = require("config");

const data = [
  {
    title: "Faculty of Engineering and IT",
    courses: [
      { title: "Software Engineering" },
      { title: "Civil Engineering" },
      { title: "Biomedical Engineering" },
    ],
  },
  {
    title: "Faculty of Business",
    courses: [{ title: "Accounting" }, { title: "Entrpreneurship" }],
  },
  {
    title: "Faculty of Architecture",
    courses: [{ title: "Architecture" }],
  },
  {
    title: "Faculty of Science",
    courses: [
      { title: "Physical Science" },
      { title: "Biomedical Science" },
      { title: "Forensics Science" },
    ],
  },
];

async function seed() {
  await mongoose.connect(config.get("db"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await Course.deleteMany({});
  await Faculty.deleteMany({});

  for (let faculty of data) {
    const { _id: facultyId } = await new Faculty({
      title: faculty.title,
    }).save();
    const courses = faculty.courses.map((course) => ({
      ...course,
      faculty: { _id: facultyId, title: faculty.title },
    }));
    await Course.insertMany(courses);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
