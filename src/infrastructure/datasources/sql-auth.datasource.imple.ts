import { BcriptAdapter } from "../../config/bcrypt";
import { UserService } from "../../data/Model/UserService";
import { AuthDataSource, CustomError, RegisterUserDto, UserEntity } from "../../domain";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { UserMapper } from "../mappers/user.mapper";

type HashFcuntion = (password: string) => string;
type CompareFunction = (password: string, hash: string) => boolean;

export class SqlAuthDataSourceImpl implements AuthDataSource {

    // Dependency Injection of bcrypt functions to be used in this class
    constructor(
        private readonly bcryptAdapter: HashFcuntion = BcriptAdapter.hash,
        private readonly bcryptCompare: CompareFunction = BcriptAdapter.compare,
        private readonly userService: UserService = new UserService()
    ) { }

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { username, email, password } = registerUserDto;
        try {
            // 1. Check if user exists in database by email
            const emailExists = await this.userService.getUserByEmail(email);

            if (emailExists) throw CustomError.badRequest('Register not completed, error internal');

            const user = await this.userService.createUser({
                username: username,
                email: email,
                password: this.bcryptAdapter(password),
                // role: role
            });

            // 3. Map to entity
            return UserMapper.userEntiFromObject(user);

        } catch (error) {
            throw error;
        }
    }

    async login(loginUserDto: LoginUserDto): Promise<UserEntity> {
        try {
            const { email, password } = loginUserDto;

            // 1. Check if user exists in database by email
            const user = await this.userService.getUserByEmail(email);
            if (!user) throw CustomError.badRequest('Login not completed, error internal');
            console.log(user.password);
            // 2. Compare password
            const passwordMatch = this.bcryptCompare(password, user.password);
            if (!passwordMatch) throw CustomError.badRequest('Login not completed, error internal');

            return UserMapper.userEntiFromObject(user);

        } catch (error) {
            throw error;
        }
    }

}