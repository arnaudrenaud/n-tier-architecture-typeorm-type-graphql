import { getDataSource } from "./adapters/database";

async function start() {
  await getDataSource();
}

start();
