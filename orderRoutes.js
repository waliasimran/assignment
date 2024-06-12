const express = require('express');
const router = express.Router();
const { ingestOrderData } = require('../controllers/orderController');

router.post('/orders', ingestOrderData);

module.exports = router;
