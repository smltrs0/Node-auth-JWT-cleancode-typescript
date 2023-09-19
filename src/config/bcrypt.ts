
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';

export class BcriptAdapter {

    static hash(password: string): string {
        const salt = genSaltSync(10);
        return hashSync(password, salt);
    }

    static compare(password: string, hash: string): boolean {
        return compareSync(password, hash);
    }
}