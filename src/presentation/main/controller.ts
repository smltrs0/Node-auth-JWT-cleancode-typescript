import { CustomError } from "../../domain";
import { Response } from 'express';


export class MainController{

    handlerError(error: unknown, response: Response) {
        if (error instanceof CustomError) {
            return response.status(error.statusCode).json(error.toJSON());
        }
        // TODO: Log error
        // 1. Log error and send email to admin
        console.log('time: ', new Date().toISOString(), 'error: ', error);
        return response.status(500).json('Internal Server Error');
    }
}