import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { SqlUserDataSourceImpl } from "../../infrastructure/datasources/sql-user.datasource.imple";
import { userRepositoryImple } from "../../infrastructure/repositories/user.repository.impl";
import { UserController } from "./controller";

export class UserRoutes {

    static get routes(): Router {
        const router = Router();

        const datasource = new SqlUserDataSourceImpl();
        const userRepository = new userRepositoryImple(datasource);
        const controller = new UserController(userRepository);

        router.put('/:id', [AuthMiddleware.validateJwt], controller.putUser); // Reemplaza todo el objeto
        
        router.patch('/:id',[ AuthMiddleware.validateJwt], controller.patchUser); // Reemplaza solo los campos enviados

        router.delete('/:id',[ AuthMiddleware.validateJwt], controller.deleteUser);

        return router;
    }

}



