const serve = require('rollup-plugin-serve');

serve({
    open: true,
    contentBase: "../dev/examples/live",
    verbose: false,
    host: 'localhost',
    port: 30001,
    onListening: function (server) {
        const address = server.address();
        const host = address.address === '::' ? 'localhost' : address.address;

        const protocol = this.https ? 'https' : 'http';
        console.log(`Server listening at ${protocol}://${host}:${address.port}/`);
      }
})