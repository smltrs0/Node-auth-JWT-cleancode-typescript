import { JwtAdapter } from "../../config/jwt.adater";
import { CustomError, RegisterUserDto } from "../../domain";
import { AuthRepository } from "../../domain/repositories/auth.repository";

type SingToken = ( payload: Object, duration : string )=> Promise<string | undefined>;

interface UserToken {
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    }
}

export class RegisterUserUseCase {

    constructor(
        private readonly authRespository: AuthRepository,
        private readonly singToken: SingToken = JwtAdapter.generateToken
    ) { }
    
    /**
     * @param registerUserDto : RegisterUserDto
     * @returns Promise<UserToken>
     * @throws CustomError
     * @throws Error
     */
    async execute(registerUserDto: RegisterUserDto): Promise<UserToken> {
        
        const user = await this.authRespository.register(registerUserDto!);
        if (!user) throw CustomError.badRequest('Error creating user');

        const token = await this.singToken({ id: user.id }, '2h');
        if (!token) throw CustomError.badRequest('Error creating token');

        return {
            token,
            user : {
                id: user.id,
                name: user.name,
                email: user.email
            }
        };
    }
}