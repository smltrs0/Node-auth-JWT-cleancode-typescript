import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { UserRoutes } from "./user/routers";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use("/api/auth", AuthRoutes.routes);

    router.use("/api/user", UserRoutes.routes);

    router.use("*", (req, res) => {
      res.status(404).json({ message: "Not Found" });
    });

    return router;
  }
}
