class Reservation {
  id: string;
  startDate: Date;
  endDate: Date;

  constructor(id: string, startDate: Date, endDate: Date) {
    this.id = id;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  static createReservation(reservation: Reservation) {
    if (reservation.startDate >= reservation.endDate) {
      throw new Error("Reservation must start before it ends.");
    }
    if (reservation.startDate < new Date()) {
      throw new Error("Reservation must start in future.");
    }
    // ...
    // TODO: save reservation in database
  }
}
