import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";

(async () => {
  await main();
})();


async function main() {
  // Start server
  await new Server({
    port: envs.port,
    routes: AppRoutes.routes,
  }).start();

  // Print logo in console text "SKELETON API"
  console.log(`
    ███████╗██╗  ██╗███████╗██╗     ███████╗████████╗ ██████╗ ███╗   ██╗     █████╗ ██████╗ ██╗
    ██╔════╝██║ ██╔╝██╔════╝██║     ██╔════╝╚══██╔══╝██╔═══██╗████╗  ██║    ██╔══██╗██╔══██╗██║
    ███████╗█████╔╝ █████╗  ██║     █████╗     ██║   ██║   ██║██╔██╗ ██║    ███████║██████╔╝██║
    ╚════██║██╔═██╗ ██╔══╝  ██║     ██╔══╝     ██║   ██║   ██║██║╚██╗██║    ██╔══██║██╔═══╝ ██║
    ███████║██║  ██╗███████╗███████╗███████╗   ██║   ╚██████╔╝██║ ╚████║    ██║  ██║██║     ██║
    ╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝     ╚═╝
    Powered by: Samuel Trias  
    `);
}
