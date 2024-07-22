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

  static async getReservations(): Promise<Reservation[]> {
    // return Reservation.find();
  }

  static createReservation(args: CreateReservationArgs): Promise<Reservation> {
    const reservation = new Reservation(args);

    if (reservation.startDate >= reservation.endDate) {
      throw new Error("Reservation must start before it ends.");
    }
    if (reservation.startDate < new Date()) {
      throw new Error("Reservation must start in future.");
    }

    // return reservation.save();
  }
}
