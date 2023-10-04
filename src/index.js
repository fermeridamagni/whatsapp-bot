const { wbClient } = require('./config/app');

function startApp() {
  wbClient.initialize();
};

startApp();