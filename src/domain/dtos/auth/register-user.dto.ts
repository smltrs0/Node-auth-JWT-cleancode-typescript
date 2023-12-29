import { Validators } from "../../../config/Validators";

export class RegisterUserDto {

    username: string;
    email: string;
    password: string;
    // role: string[] | undefined;
    // img: string | undefined;

    private constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
        // this.role = role;
        // this.img = img;
    }

    static create(object: { [key: string]: any }): [string[], RegisterUserDto?] {

        const { username, email, password = '' } = object;
        const error: string[] = [];

        if (!username) error.push('username is required');
        if (!email) error.push('email is required');
        if (!password) error.push('password is required');
        if (!Validators.validateEmail(email)) error.push('email is invalid');
        if (!Validators.validatePassword(password)) error.push('password must have at least one uppercase, one lowercase, one number and one special character');

        return [
            error,
            new RegisterUserDto(username, email, password)
        ];
    }
}