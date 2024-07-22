import { Args, Mutation, Query, Resolver } from "type-graphql";
import ReservationUseCases from "../application/ReservationUseCases";
import {
  CreateReservationArgsType,
  ReservationObjectType,
} from "../presentation/type-graphql/ReservationObjectType";

@Resolver(ReservationObjectType)
export class ReservationResolver {
  reservationUseCases: ReservationUseCases;

  constructor(reservationUseCases: ReservationUseCases) {
    this.reservationUseCases = reservationUseCases;
  }

  @Query(() => [ReservationObjectType])
  getReservations() {
    return this.reservationUseCases.getReservations();
  }

  @Mutation(() => ReservationObjectType)
  createReservation(@Args() args: CreateReservationArgsType) {
    return this.reservationUseCases.createReservation(args);
  }
}
