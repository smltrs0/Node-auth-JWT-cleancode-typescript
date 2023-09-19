import { AuthDataSource, RegisterUserDto, UserEntity } from "../../domain";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { AuthRepository } from "../../domain/repositories/auth.repository";

export class AuthRepositoryImple implements AuthRepository{

    constructor(
        private readonly datasource: AuthDataSource
    ) {}

    register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.datasource.register(registerUserDto);
    }

    login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        return this.datasource.login(loginUserDto);
    }

}