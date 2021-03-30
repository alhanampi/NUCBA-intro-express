const express = require("express");
const { members } = require("./Data");
const moment = require("moment");

const app = express();
const PORT = process.env.PORT || 8000;

//*middlewares
const logger1 = (req, res, next) => {
  console.log("soy un middleware");
  //*siempre hay que llamar al next
  next();
};

const logger2 = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
};

//*use es para llamar los middlewares
app.use(logger1);
app.use(logger2);

app.get("/api/members", (req, res) => {
  //*el método json ya se da cuenta que hay que hacer stringify sin necesidad que lo hagamos nosotros!
  res.json(members);
  //*al correr esto ya automáticamente postman va a mostrarlo bien
});

app.get("*", (req, res) => {
  res.send("ruta no encontrada");
});

app.listen(PORT, () => console.log(`server on ${PORT}`));
