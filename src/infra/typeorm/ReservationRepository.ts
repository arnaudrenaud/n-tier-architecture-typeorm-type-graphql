import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Reservation")
export default class TypeORMReservationRepository {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  startDate!: Date;

  @Column()
  endDate!: Date;
}
