const { setup: setupDevServer } = require('jest-dev-server')

module.exports = async function globalSetup() {
  console.log("globalSetup.js was invoked");

  await setupDevServer({
    command: `npm run server`,
    host: 'localhost',
    protocol: 'http',
    port: 30001
  });
  // Your global setup
}