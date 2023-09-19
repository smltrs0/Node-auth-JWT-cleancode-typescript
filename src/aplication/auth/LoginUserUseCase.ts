import { JwtAdapter } from "../../config/jwt.adater";
import { AuthRepository, CustomError, LoginUserDto } from "../../domain";
import { LoginResponse } from "./Types";


export class LoginUserUseCase {

    constructor(private readonly authRespository: AuthRepository) { }

    async execute(loginData: LoginUserDto): Promise<LoginResponse> {

        const user = await this.authRespository.login(loginData);

        if (!user) throw CustomError.badRequest('Login failed, check your credentials');

        const token = await JwtAdapter.generateToken({ id: user.id });

        return { user, token };
    }
}