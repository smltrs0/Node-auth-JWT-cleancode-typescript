import { UserEntity } from "../entities/user.entity";

export abstract class UserDataSource {
    
    abstract editUser(id: string, user: any): Promise<UserEntity>
    abstract deleteUser(id: string): Promise<UserEntity>
    abstract getUserByEmail(email: string): Promise<UserEntity>
    abstract getUserById(id: string): Promise<UserEntity>
    
}