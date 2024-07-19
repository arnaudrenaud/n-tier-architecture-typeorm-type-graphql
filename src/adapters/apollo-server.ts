import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { ReservationResolver } from "../resolvers/Reservation";

export async function getApolloServer() {
  const schema = await buildSchema({
    resolvers: [ReservationResolver],
    validate: true,
  });
  const server = new ApolloServer({ schema });
  return server;
}
