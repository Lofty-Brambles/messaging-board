const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "the message board!", msgArray: messages });
});

/* GET form page */
router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  const message = {
    text: req.body.bodyText,
    user: req.body.authorName,
    added: new Date(),
  };
  messages.unshift(message);
  res.redirect("/");
});

module.exports = router;
