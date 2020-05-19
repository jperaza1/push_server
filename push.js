const vapid = require("./vapid.json");
const urlsafeBase64 = require("urlsafe-base64");

const suscripciones = [];

const getKey = () => {
  console.log(vapid.publicKey);
  return urlsafeBase64.decode(vapid.publicKey);
};

const addSubscriptcion = (suscripcion) => {
  suscripciones.push(suscripcion);

  console.log(suscripciones);
};

module.exports = {
  getKey,
  addSubscriptcion,
};
