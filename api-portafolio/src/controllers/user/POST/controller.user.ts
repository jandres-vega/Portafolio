import {Request, Response, NextFunction} from 'express';
import ServicesUser from "../../../services/services.user";
import {User} from '../../../types/type.user';

const  userService = new ServicesUser();
const controllerUser = async(req:Request, res:Response, next:NextFunction):Promise<void> => {
    try {
        const body:User = req.body;
        const userNew:User = await userService.addUser(body);
        res.status(200).send(userNew)
    }catch (error:unknown) {
        next(error)
    }
}

export default controllerUser;