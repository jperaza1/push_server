const { Router } = require("express");
const router = Router();
const urlsafeBase64 = require("urlsafe-base64");
const push = require("./push");

router.get("/api/key", (req, res) => {
  res.json(push.getKey());
});

router.post("/api/subscribe", (req, res) => {
  console.log(req.token, req.subscription);

  res.json("Hola Mundo");
  /*const suscripcion = req.body;
  push.addSubscriptcion(suscripcion);
  res.json(suscripcion);*/
});

router.get("/api/deletesubscribe", (req, res) => {
  push.deleteAllSubscripction();

  res.json("ok");
});

router.post("/api/pushAll", (req, res) => {
  const notificacion = {
    titulo: req.body.titulo,
    cuerpo: req.body.cuerpo,
    usuario: req.body.usuario,
  };
  push.enviarNotificacion(notificacion);

  res.json(notificacion);
});

module.exports = router;
