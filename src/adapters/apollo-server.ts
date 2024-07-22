import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { ReservationResolver } from "../resolvers/Reservation";

export async function getApolloServer({
  reservationResolver,
}: {
  reservationResolver: ReservationResolver;
}) {
  const MyContainer = {
    get(ResolverClass: any) {
      if (ResolverClass === ReservationResolver) {
        return reservationResolver;
      }
      return new ResolverClass();
    },
  };

  const schema = await buildSchema({
    resolvers: [ReservationResolver],
    container: MyContainer,
    validate: true,
  });
  const server = new ApolloServer({ schema });
  return server;
}
