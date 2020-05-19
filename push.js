const vapid = require("./vapid.json");
const urlsafeBase64 = require("urlsafe-base64");
const fs = require("fs");

const suscripciones = [];

const getKey = () => {
  console.log(vapid.publicKey);
  return urlsafeBase64.decode(vapid.publicKey);
};

const addSubscriptcion = (suscripcion) => {
  suscripciones.push(suscripcion);

  fs.writeFileSync(`${__dirname}/subs-db.json`, JSON.stringify(suscripciones));
};

module.exports = {
  getKey,
  addSubscriptcion,
};
