const vapid = require("./vapid.json");
const urlsafeBase64 = require("urlsafe-base64");

const getKey = () => {
  console.log(vapid.publicKey);
  return urlsafeBase64.decode(vapid.publicKey);
};

module.exports = {
  getKey,
};
