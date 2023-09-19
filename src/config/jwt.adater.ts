import jwt from 'jsonwebtoken';
import { envs } from './envs';

export class JwtAdapter {

    static async generateToken(payload: Object, duration: string = "2h") : Promise<string | undefined> {
        // TODO:
        // 1. Get and generate seed from env
        
        return new Promise((resolve, reject) => {
            
            jwt.sign(payload, envs.jwt_seed, { expiresIn: duration }, (err, token) => {

                if (err)  reject('Error generating token');
                resolve(token);
                
            });
            
        });

    }

    static async validateJwt<T>(token: string) : Promise<T | null> {
        return new Promise((resolve, reject) => {
            try {
                jwt.verify(token, envs.jwt_seed, (err, decoded) => {
                    if (err) resolve(null);
                    resolve(decoded as T);
                });
                
            }catch (error) {
                reject('Error validating token'+ error);
            }
        });
    }
}