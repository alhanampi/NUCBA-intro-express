const express = require("express");
const path = require('path')

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send(`
        <h1>hola!</h1>
        <p>Yo soy un server express</p>
        <p>y si no me corren con nodemon, no me actualizo</p>
    `);
});

app.get("/home",(req, res) => {
    //*path.join devuelve una ruta normalizada, uniendo dos rutas (en este caso el dirname/public). 
    res.sendFile(path.join(__dirname, 'public', 'home.html'))
})

app.listen(PORT, () => console.log(`server on ${PORT}`));
