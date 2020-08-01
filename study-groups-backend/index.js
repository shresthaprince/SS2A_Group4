const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();

const faculties = require("./routes/faculties");
const courses = require("./routes/courses");
const students = require("./routes/students");
const users = require("./routes/users");
const auth = require("./routes/auth");

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR. Private Key is not defined");
  process.exit(1);
}

mongoose
  .connect("mongodb://localhost/study_groups", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Could not connect to database.", error));

app.use(express.json());
app.use(cors());

app.use("/api/students", students);
app.use("/api/faculties", faculties);
app.use("/api/courses", courses);
app.use("/api/users", users);
app.use("/api/auth", auth);

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
