const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const app = express();

const faculties = require("./routes/faculties");
const courses = require("./routes/courses");
const users = require("./routes/users");
const auth = require("./routes/auth");
const topics = require("./routes/topics");
const students = require("./routes/students");
const groups = require("./routes/groups");

if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR. Private Key is not defined");
  process.exit(1);
}

const db = config.get("db");
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Could not connect to database.", error));

app.use(express.json());
app.use(cors());

app.use("/api/faculties", faculties);
app.use("/api/courses", courses);
app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/topics", topics);
app.use("/api/students", students);
app.use("/api/groups", groups);

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));
