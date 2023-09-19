import { CustomError, UserEntity } from "../../domain";


export class UserMapper{
    
    static userEntiFromObject(object: { [key : string] : any}) {
        
        const { _id, id, name, email, role, img } = object;
        if (!id && !_id) throw CustomError.badRequest('Missing id')
        if (!name) throw CustomError.badRequest('Missing name');
        if (!email) throw CustomError.badRequest('Missing email');
        
        return new UserEntity(
            id || _id,
            name,
            email,
            role,
            img
        );
    }
}