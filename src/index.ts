import "reflect-metadata";
import { getDataSource } from "./adapters/database";
import { buildSchema } from "type-graphql";
import { ReservationResolver } from "./resolvers/Reservation";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

async function start() {
  await getDataSource();
  console.log(`💾 Connected to database.`);

  const schema = await buildSchema({
    resolvers: [ReservationResolver],
    validate: true,
  });
  const server = new ApolloServer({ schema });

  await startStandaloneServer(server, { listen: { port: 4003 } });
  console.log(`🚀 GraphQL server ready.`);
}

start();
