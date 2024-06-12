const amqp = require('amqplib');
const { createCustomer } = require('../models/customer');
const { createOrder } = require('../models/order');

const QUEUE = 'data_ingestion';

const consumeMessages = async () => {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(QUEUE, { durable: true });

    channel.consume(QUEUE, async (msg) => {
        if (msg !== null) {
            const message = JSON.parse(msg.content.toString());
            if (message.type === 'customer') {
                await createCustomer(message.data);
            } else if (message.type === 'order') {
                await createOrder(message.data);
            }
            channel.ack(msg);
        }
    }, { noAck: false });
};

consumeMessages();
