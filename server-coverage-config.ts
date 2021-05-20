const serve_coverage= require('rollup-plugin-serve');

serve_coverage({
    open: true,
    contentBase: "./coverage",
    verbose: false,
    host: 'localhost',
    port: 30002,
    // @ts-ignore
    onListening: function (server) {
        const address = server.address();
        const host = address.address === '::' ? 'localhost' : address.address;

        const protocol = this.https ? 'https' : 'http';
        console.log(`Server listening at ${protocol}://${host}:${address.port}/`);
      }
});

