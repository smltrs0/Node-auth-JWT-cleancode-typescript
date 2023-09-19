import { Router } from "express";
import { AuthController } from "./controller";
import { AuthRepositoryImple, MongoAuthDataSourceImpl } from "../../infrastructure";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class AuthRoutes {

    static get routes(): Router {
        const router = Router();
        // Injection dependencies
        const datasource = new MongoAuthDataSourceImpl();
        const authRepository = new AuthRepositoryImple(datasource);
        const controller = new AuthController(authRepository);

        router.post('/login', controller.loginUser);

        router.post('/register', controller.registerUser);

        // TODO: Generate implementations
        router.get('/', [AuthMiddleware.validateJwt], controller.getUsers);
        // router.put('/', [AuthMiddleware.validateJwt], controller.getUsers);
        // router.delete('/', [AuthMiddleware.validateJwt], controller.getUsers);

        return router;
    }
}