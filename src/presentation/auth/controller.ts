import { AuthRepository, LoginUserDto, RegisterUserDto } from '../../domain';
import { LoginUserUseCase, RegisterUserUseCase } from '../../aplication/auth';
import { Request, Response } from 'express';
import UserService from "../../../data/Model/UserService";
import { MainController } from '@presentation/main/controller';

export class AuthController extends MainController {

    constructor(
        private readonly authRepository: AuthRepository
    ) { 
        super();
    }


    registerUser = (req: Request, res: Response) => {

        const [errorRegister, registerUserDto] = RegisterUserDto.create(req.body);

        if (errorRegister.length > 0) return res.status(400).json(errorRegister);

        new RegisterUserUseCase(this.authRepository)
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            .execute(registerUserDto!).then((data) => {
                res.json(data);
            }).catch((error) => {
                this.handlerError(error, res); 
            });
    };

    loginUser = (req: Request, res: Response) => {
        const [validatorError, ValidatedData] = LoginUserDto.create(req.body);
        if (validatorError.length > 0) return res.status(400).json(validatorError);

        new LoginUserUseCase(this.authRepository)
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            .execute(ValidatedData!).then((data) => {
                res.json(data);
            }).catch((error) => {
                this.handlerError(error, res);
            });
    };


    getUsers = (req: Request, res: Response) => {

        const userService = new UserService();
        userService.getUsers().then((data) => {
            res.json(data);
        }).catch((error) => {
            this.handlerError(error, res);
        });
    };
}