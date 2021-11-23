import "reflect-metadata";
import createServer from "./create-server";

const port = process.env.PORT || 5000;

async function startup() {
  const server = await createServer();

  // The `listen` method launches a web server.
  const { url } = await server.listen(port);
  console.log(`🚀  Server ready at ${url}`);

}

startup();
