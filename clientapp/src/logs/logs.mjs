// class LoggerImpl {
//   constructor(severity) {
//     this.SUCCESS_TYPE = "success";
//     this.FAILURE_TYPE = "failure";
//     this.INFO_TYPE = "info";
//     this.colors = {
//       success: ["\x1b[36m", "\x1b[0m"],
//       failure: ["\x1b[31m", "\x1b[0m"],
//       info: ["\x1b[33m", "\x1b[0m"],
//     };
//     this.consoleLogger = console;
//   }

//   storeLogs(){
//   }

//   log(type,message){
//     const color =  this.colors[type]
//     this.consoleLogger.log(`${color[0]}${message}${color[1]}`)
//   }
// }


import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  brokers: ['tender-giraffe-8501-us1-kafka.upstash.io:9092'],
  ssl: true,
  sasl: {
      mechanism: 'scram-sha-256',
      username: 'dGVuZGVyLWdpcmFmZmUtODUwMSQ9nz1W2gyifMLkmTHPxvYBLyToC3v_mQwt0Mw',
      password: 'ZmVlZTEyMjAtOTAwYS00ZDA1LTg4ZTUtNTQ5NDBmMzczODA2'
  },
  logLevel: logLevel.ERROR,
});

const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  await producer.send({
      topic: 'YOUR_TOPIC',
      messages: [
      { value: 'Hello Kafka!' },
      ],
  });

  console.log("Message sent successfully");
  await producer.disconnect();
};

run().catch(e => console.error('[example/producer] e.message', e));