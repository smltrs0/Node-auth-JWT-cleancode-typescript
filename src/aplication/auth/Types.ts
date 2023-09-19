import { UserEntity } from "../../domain";


export interface LoginResponse {
    user: UserEntity,
    token?: string
}