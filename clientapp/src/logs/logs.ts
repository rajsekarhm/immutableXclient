import { Kafka, logLevel } from 'kafkajs';
const [topicFrmCLI,...options] =  process.argv[2] 
const kafka = new Kafka({
  brokers: ['host broker'],
  ssl: true,
  sasl: {
      mechanism: 'scram-sha-256',
      username: 'username',
      password: 'password'
  },
  logLevel: logLevel.ERROR,
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();
  await producer.send({
      topic: topicFrmCLI,
      messages: [
      { value: 'Hello Folks !' },
      ],
  });
  await producer.disconnect();
};

run().catch(e => console.error('[example/producer] e.message', e));