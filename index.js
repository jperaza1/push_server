const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const route = require("./routes");

//Configurar Express
const app = express();
app.set("port", process.env.PORT || 5000);

//Middleware
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send({ message: `Api corriendo` });
});

app.use(route);

app.listen({ port: app.get("port") }, () =>
  console.log(`Servidor corriendo en puerto ${app.get("port")}`)
);
