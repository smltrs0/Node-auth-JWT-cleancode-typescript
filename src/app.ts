import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(async () => {
  await main();
})();


async function main() {
  // Start server
  new Server({
    port: envs.port,
    routes: AppRoutes.routes,
  }).start();

  // Print logo in console text "server runing" 
  console.log(`
      ███████╗████████╗ ██████╗ ██████╗ ███████╗     █████╗ ██████╗ ██╗
      ██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝    ██╔══██╗██╔══██╗██║
      ███████╗   ██║   ██║   ██║██████╔╝█████╗      ███████║██████╔╝██║
      ╚════██║   ██║   ██║   ██║██╔══██╗██╔══╝      ██╔══██║██╔═══╝ ██║
      ███████║   ██║   ╚██████╔╝██║  ██║███████╗    ██║  ██║██║     ██║
      ╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝    ╚═╝  ╚═╝╚═╝     ╚═╝
  `);
}
