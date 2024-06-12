const express = require('express');
const router = express.Router();
const { ingestCustomerData } = require('../controllers/customerController');

router.post('/customers', ingestCustomerData);

module.exports = router;
