const express = require("express");
const router = express.Router();

const Pusher = require("pusher");

var pusher = new Pusher({
  appId: "707701",
  key: "7d54172eb46efd248d52",
  secret: "e9efc7e5da6b56b1f6fa",
  cluster: "us2",
  encrypted: true
});

router.get("/", (req, res) => {
  res.send("POLL");
});

router.post("/", (req, res) => {
  pusher.trigger("os-poll", "os-vote", {
    points: 1,
    os: req.body.os
  });

  return res.json({ success: true, message: "Thanks for voting." });
});

module.exports = router;
