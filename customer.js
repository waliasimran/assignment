const db = require('../config/db');

const createCustomer = async (customerData) => {
    const [result] = await db.query('INSERT INTO customers SET ?', customerData);
    return result.insertId;
};

module.exports = { createCustomer };
