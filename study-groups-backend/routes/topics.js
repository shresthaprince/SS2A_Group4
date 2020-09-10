const express = require("express");
const router = express.Router();
const { Topic, validateTopic } = require("../models/topic");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router.get("/", async (req, res) => {
  const topics = await Topic.find().sort("title");
  res.send(topics);
});

router.get("/:id", async (req, res) => {
  const topic = await Topic.findById(req.params.id);
  if (!topic) return res.status(404).send("Topic does not exist");

  res.send(topic);
});

router.post("/", [auth, admin], async (req, res) => {
  const { error } = validateTopic(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let topic = new Topic({
    title: req.body.title,
    skills: req.body.skills,
  });
  topic = await topic.save();

  res.send(topic);
});

router.put("/:id", [auth, admin], async (req, res) => {
  const { error } = validateTopic(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const topic = await Topic.findByIdAndUpdate(
    req.params.id,
    { title: req.body.title, skills: req.body.skills },
    { new: true }
  );
  if (!topic) return res.status(404).send("Topic does not exist");

  res.send(topic);
});

router.delete("/:id", [auth, admin], async (req, res) => {
  const topic = await Topic.findByIdAndRemove(req.params.id);
  if (!topic) return res.status(404).send("Topic does not exist");

  res.send(topic);
});

module.exports = router;
