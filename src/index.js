const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const beneficiaryRoutes = require('./routes/BeneficiaryRoutes');

app.use('/beneficiaries', beneficiaryRoutes);

module.exports = app;
