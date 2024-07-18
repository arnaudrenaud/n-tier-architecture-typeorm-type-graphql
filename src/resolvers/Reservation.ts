import { Args, Mutation, Query, Resolver } from "type-graphql";
import Reservation, { CreateReservationArgs } from "../entities/Reservation";

@Resolver(Reservation)
export class ReservationResolver {
  @Query(() => [Reservation])
  getReservations() {
    return Reservation.getReservations();
  }

  @Mutation(() => Reservation)
  createReservation(@Args() args: CreateReservationArgs) {
    return Reservation.createReservation(args);
  }
}
