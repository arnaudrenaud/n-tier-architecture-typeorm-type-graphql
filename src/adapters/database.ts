import { DataSource } from "typeorm";
import Reservation from "../entities/Reservation";

let dataSource: DataSource;

export const getDataSource = async () => {
  if (!dataSource) {
    dataSource = new DataSource({
      type: "postgres",
      url: "postgres://postgres:mysecretpassword@localhost:5433/postgres",
      entities: [Reservation],
      synchronize: true,
    });
    await dataSource.initialize();
  }
  return dataSource;
};
