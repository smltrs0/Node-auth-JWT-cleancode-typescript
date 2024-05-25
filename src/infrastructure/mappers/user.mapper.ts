import { CustomError, UserEntity } from "../../domain";


export class UserMapper{
    
    static userEntiFromObject(object: { [key : string] : any}) {
        
        const { _id, id, username, email, password } = object;

        if (!username) throw CustomError.badRequest('Missing name');
        if (!email) throw CustomError.badRequest('Missing email');
        
        return new UserEntity(
            id || _id,
            username,
            email,
            password
        );
    }
}