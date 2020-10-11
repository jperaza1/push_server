const { Router } = require("express");
const router = Router();
const urlsafeBase64 = require("urlsafe-base64");
const push = require("./push");

router.get("/api/key", (req, res) => {
  res.json(push.getKey());
});

router.post("/api/subscribe", (req, res) => {
  const suscripcion = req.body;
  push.addSubscriptcion(suscripcion);
  res.status(200).json({ suscripcion });
});

router.get("/api/deletesubscribe", (req, res) => {
  push.deleteAllSubscripction();

  res.status(200).json({ Response: "Ok" });
});

router.post("/api/pushAll", (req, res) => {

  // Ejemplo de objeto de notificacion para Angular
  const notificationPayload = {
    "notification": {
      "title": "Angular News",
      "body": "Newsletter Available!",
      "icon": "assets/icons/icon-72x72.png",
      "vibrate": [100, 50, 100],
      "data": {
        "dateOfArrival": Date.now(),
        "primaryKey": 1
      },
      "actions": [{
        "action": "explore",
        "title": "Go to the site"
      }]
    }
  };

  // Ejemplo de objeto de notificacion para React, en este caso se puede enviar cual estructura de de objeto
  // const notificationPayload = {
  //   titulo: req.body.titulo,
  //   cuerpo: req.body.cuerpo,
  //   usuario: req.body.usuario,
  // };
  push.enviarNotificacion(notificationPayload);

  res.status(200).json({ Response: "Enviado" });
});

module.exports = router;
