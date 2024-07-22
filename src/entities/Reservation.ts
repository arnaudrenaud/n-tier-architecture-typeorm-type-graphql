export class CreateReservationArgs {
  startDate!: Date;
  endDate!: Date;
}

export default class Reservation {
  id!: string;
  startDate!: Date;
  endDate!: Date;

  constructor(args: CreateReservationArgs) {
    this.startDate = args.startDate;
    this.endDate = args.endDate;
  }
}
