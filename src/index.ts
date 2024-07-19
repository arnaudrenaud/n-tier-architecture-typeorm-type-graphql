import "reflect-metadata";
import { getDataSource } from "./adapters/database";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getApolloServer } from "./adapters/apollo-server";

async function start() {
  await getDataSource();
  console.log(`💾 Connected to database.`);

  const server = await getApolloServer();

  await startStandaloneServer(server, { listen: { port: 4003 } });
  console.log(`🚀 GraphQL server ready.`);
}

start();
