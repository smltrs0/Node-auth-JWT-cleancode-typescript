import { envs } from "./config/envs";
import { MongoDatabase } from "./data/mongodb/mongo-database";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(async () => {
  await main();
})();

async function main() {
  await MongoDatabase.connect({
    mongoUrl: envs.db.mongo_host,
    dbName: envs.db.mongo_db_name,
  });

  new Server({
    port: envs.port,
    routes: AppRoutes.routes,
  }).start();
}
