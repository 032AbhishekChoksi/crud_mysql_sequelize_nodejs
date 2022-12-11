const express = require('express');
const app = express();

const port = 8080;
require('./models');
var userCtrl = require('./controllers/userController');

app.get("/", (req, resp) => {
    resp.send("Home Page");
});

app.get("/add", userCtrl.addUser);

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});