import { UserRepository } from "../../domain/repositories/user.repository";


export class PutUserCase {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    async execute(user: any) {
        return this.userRepository.editUser(user.id, user);
    }
}