import { Validators } from "../../../config/Validators";

export class RegisterUserDto {

    name: string;
    email: string;
    password: string;
    role: string[] | undefined;
    img: string | undefined;

    private constructor(name: string, email: string, password: string, role?: string[], img?: string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.img = img;
    }

    static create(object: { [key: string]: any }): [string[], RegisterUserDto?] {

        const { name, email, password = '', role, img } = object;
        const error: string[] = [];

        if (!name) error.push('name is required');
        if (!email) error.push('email is required');
        if (!password) error.push('password is required');
        if (!Validators.validateEmail(email)) error.push('email is invalid');
        if (!Validators.validatePassword(password)) error.push('password must have at least one uppercase, one lowercase, one number and one special character');

        return [
            error,
            new RegisterUserDto(name, email, password, role, img)
        ];
    }
}