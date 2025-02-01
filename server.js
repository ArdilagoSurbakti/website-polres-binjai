const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const web = require('./route/web.js');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    // host: 'localhost'
    host:"172.20.10.2"
  });
  await server.register(Inert);

  server.route(web);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
