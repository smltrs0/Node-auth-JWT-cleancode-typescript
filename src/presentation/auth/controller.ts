import { AuthRepository, CustomError, LoginUserDto, RegisterUserDto } from '../../domain';
import { LoginUserUseCase, RegisterUserUseCase } from '../../aplication/auth';
import { UserModel } from '../../data/mongodb';
import { Request, Response } from 'express';

export class AuthController {

    constructor(
        private readonly authRepository: AuthRepository
    ) { }

    private handlerError(error: unknown, response: Response) {
        if (error instanceof CustomError) {
            return response.status(error.statusCode).json(error.message);
        }
        // TODO: Log error
        // 1. Log error and send email to admin
        return response.status(500).json('Internal Server Error');
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

        UserModel.find().then((users) => {
            res.json(users);
            console.log('Only to test');
        }).catch((error) => {
            this.handlerError(error, res);
        });
    };
}