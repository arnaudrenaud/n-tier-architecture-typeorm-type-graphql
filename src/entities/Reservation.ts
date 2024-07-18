import { ArgsType, Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ArgsType()
export class CreateReservationArgs {
  @Field()
  startDate!: Date;

  @Field()
  endDate!: Date;
}

@Entity()
@ObjectType()
export default class Reservation extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => ID)
  id!: string;

  @Column()
  @Field()
  startDate!: Date;

  @Column()
  @Field()
  endDate!: Date;

  constructor(args?: CreateReservationArgs) {
    super();

    if (args) {
      this.startDate = args.startDate;
      this.endDate = args.endDate;
    }
  }

  static async getReservations(): Promise<Reservation[]> {
    return Reservation.find();
  }

  static createReservation(args: CreateReservationArgs): Promise<Reservation> {
    const reservation = new Reservation(args);

    if (reservation.startDate >= reservation.endDate) {
      throw new Error("Reservation must start before it ends.");
    }
    if (reservation.startDate < new Date()) {
      throw new Error("Reservation must start in future.");
    }

    return reservation.save();
  }
}
