import { ArgsType, Field, ID, ObjectType } from "type-graphql";

@ArgsType()
export class CreateReservationArgsType {
  @Field()
  startDate!: Date;

  @Field()
  endDate!: Date;
}

@ObjectType()
export class ReservationObjectType {
  @Field(() => ID)
  id!: string;

  @Field()
  startDate!: Date;

  @Field()
  endDate!: Date;
}
