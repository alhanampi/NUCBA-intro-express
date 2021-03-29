const express = require("express");

//inicializar express
const app = express();

//le paso el GET directamente!
app.get("/", (req, res) => {
    //si voy a postman, ya todos esos datos que mandaba manualmente para el header están
    res.send("hola!");
});

app.listen(5000);
