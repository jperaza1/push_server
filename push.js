const vapid = require("./vapid.json");
const urlsafeBase64 = require("urlsafe-base64");
const fs = require("fs");

const suscripciones = require("./subs-db.json");

const getKey = () => {
  console.log(vapid.publicKey);
  return urlsafeBase64.decode(vapid.publicKey);
};

const addSubscriptcion = (suscripcion) => {
  suscripciones.push(suscripcion);
  console.log(suscripciones);
  fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify(suscripciones));
};

const deleteAllSubscripction = () => {
  fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify([]));
};

module.exports = {
  getKey,
  addSubscriptcion,
  deleteAllSubscripction,
};
