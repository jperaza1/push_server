const vapid = require("./vapid.json");
const urlsafeBase64 = require("urlsafe-base64");
const fs = require("fs");

const webpush = require("web-push");

webpush.setVapidDetails(
  "mailto:enrique_peraza1994@hotmail.com",
  vapid.publicKey,
  vapid.privateKey
);

// Obtener el vapid publickey para enviarlo al cliente y que haga la subcripcion 
const getKey = () => {
  return vapid.publicKey;
};

//Agregar la subcripcion al archivo subs-db.json
const addSubscriptcion = (suscripcion) => {
  const suscripciones = require("./subs-db.json");
  suscripciones.push(suscripcion);
  console.log(suscripciones);
  fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify(suscripciones));
};

//Eliminar todas las subcripciones del archivo subs-db.json
const deleteAllSubscripction = () => {
  fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify([]));
};

//Metodo se encarga de enviar las notificaciones a todas las subcripciones guardadas subs-db.json
const enviarNotificacion = (post) => {
  const suscripciones = require("./subs-db.json");

  suscripciones.forEach((suscripcion, i) => {
    webpush.sendNotification(suscripcion, JSON.stringify(post)).catch((err) => {
      console.log(err);
      suscripciones.splice(i, 1);
    });
  });
  fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify(suscripciones));
};

module.exports = {
  getKey,
  addSubscriptcion,
  deleteAllSubscripction,
  enviarNotificacion,
};
