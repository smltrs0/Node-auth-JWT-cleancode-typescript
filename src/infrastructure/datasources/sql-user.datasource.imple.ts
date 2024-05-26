import { BcriptAdapter } from "src/config/bcrypt";
import UserService from "../../../data/Model/UserService";
import { UserEntity } from "../../domain";
import { UserDataSource } from "../../domain/datasources/user.datasource";

type HashFcuntion = (password: string) => string;

export class SqlUserDataSourceImpl implements UserDataSource{

    constructor(
        private readonly userService: UserService = new UserService(),
        private readonly bcryptAdapter: HashFcuntion = BcriptAdapter.hash,

    ) { }

    async editUser(id: string, data: any): Promise<UserEntity> {
        const userData = { ...data.user };

        if (userData.password) userData.password = this.bcryptAdapter(userData.password);

        return await this.userService.editUser(id, { user: userData });
    }

    deleteUser(id: string): Promise<UserEntity> {
        return this.userService.deleteUser(id);
    }

    getUserByEmail(email: string): Promise<UserEntity> {
        return this.userService.getUserByEmail(email);
    }

    getUserById(id: string): Promise<UserEntity> {
        return this.userService.getUserById(id);
    }

}