import { UserDataSource } from "../../domain/datasources/user.datasource";
import { UserRepository } from "../../domain/repositories/user.repository";

export class userRepositoryImple implements UserRepository {
    constructor(
        private readonly datasource: UserDataSource
    ) {
    }
    editUser(id: string, user: any) {
        return this.datasource.editUser(id, user);
    }
    deleteUser(id: string) {
        return this.datasource.deleteUser(id);
    }

    getUserByEmail(email: string) {
        return this.datasource.getUserByEmail(email);
    }

    getUserById(id: string) {
        return this.datasource.getUserById(id);
    }
}