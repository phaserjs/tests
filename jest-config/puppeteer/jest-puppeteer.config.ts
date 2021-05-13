module.exports = {
    server: {
      command: `npm run server`, 
      port: 30001,
      protocol: 'http', 
      launchTimeout: 30000, 
      debug: true,
    },
    launch: {
      dumpio: true,
      headless: process.env.HEADLESS !== 'false',
      args: ['--disable-infobars', '--no-sandbox', '--disable-setuid-sandbox'],
      timeout: 120000,
    },
  };