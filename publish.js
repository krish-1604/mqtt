const awsIot = require('aws-iot-device-sdk');

const device = awsIot.device({
  keyPath: 'certificates/93c88f7161c636bc6433f5e24fedc34bcf04495a16413aa47ab355a0aba95101-private.pem.key',
  certPath: 'certificates/93c88f7161c636bc6433f5e24fedc34bcf04495a16413aa47ab355a0aba95101-certificate.pem.crt',
  caPath: 'certificates/AmazonRootCA1.pem',
  clientId: 'iotconsole-1299ee72-2782-4178-8bcb-d76a61391e7f',
  host: 'a2vsxjlm2s5txq-ats.iot.ap-south-1.amazonaws.com',
  protocol: 'mqtts',
  port: 8883
});

device.on('connect', function () {
  console.log('✅ Connected to AWS IoT');
  device.publish('myTopic', JSON.stringify({ message: 'hi from Node.js' }), { qos: 1 }, () => {
    console.log('📤 Message published');
    device.end();
  });
});

device.on('error', function (err) {
  console.error('❌ Error:', err);
});
