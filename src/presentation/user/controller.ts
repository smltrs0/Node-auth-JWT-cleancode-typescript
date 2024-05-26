import { PutUserCase } from "../../aplication/user/PutUserCase";
import { PatchUserCase } from "../../aplication/user/PatchUserCase";
import { UserRepository } from "../../domain/repositories/user.repository";
import { MainController } from "../main/controller";
import { Request, Response } from 'express';
import { PutUserDto } from "../../domain/dtos/user/put-user.dto";
import { PatchUserDto } from "../../domain/dtos/user/patch-user.dto";
import { CustomError } from "@domain/index";

export class UserController extends MainController{

    constructor(
        private readonly userRepository: UserRepository
    ) {
        super();
    }

    putUser = async (req: Request, res: Response) => {
        const [errorUserDto, userDto] = PutUserDto.create(req.params.id, req.body);

        if (errorUserDto.length > 0) return res.status(400).json(errorUserDto);

        new PutUserCase(this.userRepository).execute(userDto).then((result) => {
            res.status(200).json(result);
        }).catch((error) => {
            this.handlerError(error, res);
        });
    };

    patchUser = async (req: Request, res: Response) => {

        try {
            const [errorUserDto, userDto] = PatchUserDto.create(req.params.id, req.body);

            if (errorUserDto.length > 0) return res.status(400).json(errorUserDto);

            const userExist = await this.userRepository.getUserById(req.params.id);
            
            if (!userExist) throw CustomError.notFound('User not found');
            
            if (userDto?.email && userDto.email !== userExist.email) {
                const userDuplicate = await this.userRepository.getUserByEmail(userDto.email);
                if (userDuplicate) throw CustomError.conflict('Email already exists'); 
            }
            new PatchUserCase(this.userRepository).execute(userDto).then((result) => {
                res.status(200).json(result);
            });

        } catch (error) {
            this.handlerError(error, res);
        }
    };

    deleteUser = async (req: Request, res: Response) => {
        try {
            // const userService = new UserService();
            // const id = req.params.id;
            // const userDeleted = await userService.deleteUser(id);
            res.status(200).json('deleteUser');
        } catch (error) {
            this.handlerError(error, res);
        }
    };


}