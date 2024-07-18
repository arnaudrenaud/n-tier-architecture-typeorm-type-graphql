import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

type CreateReservationArgs = {
  id: string;
  startDate: Date;
  endDate: Date;
};

@Entity()
export default class Reservation extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  startDate!: Date;

  @Column()
  endDate!: Date;

  constructor(args: CreateReservationArgs) {
    super();

    if (args) {
      this.id = args.id;
      this.startDate = args.startDate;
      this.endDate = args.endDate;
    }
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
