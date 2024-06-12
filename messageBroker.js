const amqp = require('amqplib');

const QUEUE = 'data_ingestion';

const publishToQueue = async (data) => {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(QUEUE, { durable: true });
    channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify(data)));
    setTimeout(() => { connection.close(); }, 500);
};

module.exports = { publishToQueue };
