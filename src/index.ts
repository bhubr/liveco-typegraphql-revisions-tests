import createServer from "./create-server";

const port = process.env.PORT || 5000;

const server = createServer();

// The `listen` method launches a web server.
server.listen(port).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});