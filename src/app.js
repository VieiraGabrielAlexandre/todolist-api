const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


const indexRoute = require("./routers/index");
const todoRoute = require("./routers/todo");

app.use("/", indexRoute);
app.use("/todos", todoRoute);



module.exports = app;
