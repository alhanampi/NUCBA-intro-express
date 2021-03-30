const express = require("express");
const path = require('path')

const app = express();
const PORT = process.env.PORT || 8000;

//*express ya tiene su propia forma de manejar estáticos:
//*use se usa con los middlewares
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`server on ${PORT}`));
