const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const beneficiaryRoutes = require('./routes/BeneficiaryRoutes');
const plansRoutes = require('./routes/plansRoutes');
const pricesRoutes = require('./routes/pricesRoute');

app.use('/beneficiaries', beneficiaryRoutes);
app.use('/plans', plansRoutes);
app.use('/prices', pricesRoutes);

module.exports = app;
