const { Router } = require("express");
const router = Router();
const urlsafeBase64 = require("urlsafe-base64");
const push = require("./push");

router.get("/api/key", (req, res) => {
  res.send(push.getKey());
});

module.exports = router;
