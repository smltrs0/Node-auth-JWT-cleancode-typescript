import { BcriptAdapter } from "../../config/bcrypt";
import { UserModel } from "../../data/mongodb";
import { AuthDataSource, CustomError, RegisterUserDto, UserEntity } from "../../domain";
import { LoginUserDto } from "../../domain/dtos/auth/login-user.dto";
import { UserMapper } from "../mappers/user.mapper";

type HashFcuntion = (password: string) => string;
type CompareFunction = (password: string, hash: string) => boolean;

export class MongoAuthDataSourceImpl implements AuthDataSource {

    // Dependency Injection of bcrypt functions to be used in this class
    constructor(
        private readonly bcryptAdapter: HashFcuntion = BcriptAdapter.hash,
        private readonly bcryptCompare: CompareFunction = BcriptAdapter.compare
    ) { }

    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const { name, email, password, role = ['USER'] } = registerUserDto;
        try {
            // 1. Check if user exists in database by email
            const emailExists = await UserModel.findOne({ email: email });

            if (emailExists) throw CustomError.badRequest('Register not completed, error internal');

            const user = await UserModel.create({
                name: name,
                email: email,
                password: this.bcryptAdapter(password),
                role: role
            });

            await user.save();
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
            const user = await UserModel.findOne({ email: email });
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