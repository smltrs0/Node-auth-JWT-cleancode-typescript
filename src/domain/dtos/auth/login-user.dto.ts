
export class LoginUserDto {

    private constructor(
        public email: string,
        public password: string
    ) {
    }

    static create(object: { [key: string]: any }): [string[], LoginUserDto?] {
            
            const { email, password = '' } = object;
            const error: string[] = [];
    
            if (!email) error.push('email is required');
            if (!password) error.push('password is required');
    
            return [
                error,
                new LoginUserDto(email, password)
            ];
        }
}