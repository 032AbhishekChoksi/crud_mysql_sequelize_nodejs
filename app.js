const express = require('express');
const app = express();

const port = 8080;
require('./models');

app.get("/", (req, resp) => {
    resp.send("Home Page");
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});