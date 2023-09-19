import 'dotenv/config';
import { get } from 'env-var';

interface ENV {
    port: number;
    jwt_seed: string;
    db: {
        mongo_host: string;
        mongo_db_name: string ;
    }
} 

// get is to validate if the variable exists and throw an error if it doesn't in the .env file
// TODO: 
// 1. add more validations with env -var
export const envs : ENV = {
    port: process.env.PORT ? parseInt(process.env.PORT) : 3000,
    jwt_seed : get('JWT_SEED').required().asString(),
    db: {
        mongo_host: process.env.MONGO_DB_URL || '',
        mongo_db_name: process.env.MONGO_DB_NAME || '',
    }
};