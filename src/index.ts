import "reflect-metadata";
import { getDataSource } from "./adapters/database";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getApolloServer } from "./adapters/apollo-server";
import { ReservationResolver } from "./resolvers/Reservation";
import ReservationUseCases from "./application/ReservationUseCases";
import TypeORMReservationRepository from "./infra/typeorm/ReservationRepository";

async function start() {
  await getDataSource();
  console.log(`💾 Connected to database.`);

  const reservationUseCases = new ReservationUseCases(
    (await getDataSource()).getRepository(TypeORMReservationRepository)
  );

  const server = await getApolloServer({
    reservationResolver: new ReservationResolver(reservationUseCases),
  });

  await startStandaloneServer(server, { listen: { port: 4003 } });
  console.log(`🚀 GraphQL server ready.`);
}

start();
