const { Router } = require("express");
const router = Router();
const urlsafeBase64 = require("urlsafe-base64");
const push = require("./push");

router.get("/api/key", (req, res) => {
  res.send(push.getKey());
});

router.post("/api/subscribe", (req, res) => {
  const suscripcion = req.body;
  push.addSubscriptcion(suscripcion);
  res.json(suscripcion);
});

module.exports = router;
