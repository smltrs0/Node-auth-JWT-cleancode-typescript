import { Validators } from "src/config/Validators";

export class PatchUserDto {
    id: string;
    user: any;
    email: string;
    password: string;

    private constructor(id: string, user: any) {
        this.id = id;
        this.user = user;
        this.email = user.email;
        this.password = user.password;
    }


    static create(id: string, object: { [key: string]: any }): [string[], PatchUserDto?] {

        const error: string[] = [];

        if (Object.keys(object).length === 0) {
            error.push('The object is empty');
        }

        if (object.username && object.username.length < 3) {
            error.push('The username must have at least 3 characters');
        }

        if (object.email && Validators.validateEmail(object.email) === false) {
            error.push('The email is not valid');
        }

        if (object.password && Validators.validatePassword(object.password) === false){
            error.push('The password must have at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character');
        }

        // Validaciones adicionales
        return [
            error,
            new PatchUserDto(
                id,
                {... object}
            )
        ];
        
    }
}