const { publishToQueue } = require('../services/messageBroker');

const ingestOrderData = async (req, res) => {
    const orderData = req.body;
    await publishToQueue({ type: 'order', data: orderData });
    res.status(200).send('Order data ingestion started.');
};

module.exports = { ingestOrderData };
