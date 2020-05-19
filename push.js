const vapid = require("./vapid.json");
const urlsafeBase64 = require("urlsafe-base64");
const fs = require("fs");

const webpush = require("web-push");

webpush.setVapidDetails(
  "mailto:enrique_peraza1994@hotmail.com",
  vapid.publicKey,
  vapid.privateKey
);

const getKey = () => {
  console.log(vapid.publicKey);
  return urlsafeBase64.decode(vapid.publicKey);
};

const addSubscriptcion = (suscripcion) => {
  const suscripciones = require("./subs-db.json");
  suscripciones.push(suscripcion);
  console.log(suscripciones);
  fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify(suscripciones));
};

const deleteAllSubscripction = () => {
  fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify([]));
};

const enviarNotificacion = (post) => {
  const suscripciones = require("./subs-db.json");

  suscripciones.forEach((suscripcion, i) => {
    webpush.sendNotification(suscripcion, "Hola Mundo");
  });
};

module.exports = {
  getKey,
  addSubscriptcion,
  deleteAllSubscripction,
  enviarNotificacion,
};
