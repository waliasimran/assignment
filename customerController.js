const { publishToQueue } = require('../services/messageBroker');

const ingestCustomerData = async (req, res) => {
    const customerData = req.body;
    await publishToQueue({ type: 'customer', data: customerData });
    res.status(200).send('Customer data ingestion started.');
};

module.exports = { ingestCustomerData };
