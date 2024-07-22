import Reservation from "../entities/Reservation";

export interface ReservationRepositoryInterface {
  find(): Promise<Reservation[]>;
  save(reservation: Reservation): Promise<Reservation>;
}
