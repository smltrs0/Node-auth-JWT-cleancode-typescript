export class Validators {

    static validateEmail(email: string): boolean {
        const emailRegex = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);
        return emailRegex.test(email);
    }

    static validatePassword(password: string): boolean {
        // 1. Debe tener al menos 8 caracteres
        // 2. Debe tener al menos un número
        // 3. Debe tener al menos una letra minúscula
        // 4. Debe tener al menos una letra mayúscula
        // 5. Debe tener al menos un caracter especial

        const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
        return passwordRegex.test(password);
    }
}