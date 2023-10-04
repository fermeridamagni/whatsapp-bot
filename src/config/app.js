const { Client } = require('whatsapp-web.js');
const qrCode = require('qrcode-terminal');
const dotenv = require('dotenv');

const wbClient = new Client();

// Setting
dotenv.config();

wbClient.on('qr', (qr) => {
  qrCode.generate(qr, { small: true });
});

wbClient.on('ready', () => {
  console.log('Client is ready!');
});

module.exports = {
  wbClient
};