const express = require("express");

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("hola!");
});

app.listen(PORT, () => console.log(`server on ${PORT}`));
