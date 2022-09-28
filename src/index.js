const express = require('express');
const cors = require('cors');
const { urlencoded } = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

module.exports = app;
