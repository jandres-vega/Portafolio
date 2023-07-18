import Boom from '@hapi/boom';
import {Request, Response, NextFunction} from "express";
import TypeErrors from "../types/type.errors";

const logErrors = (error:any,req:Request, res:Response, next:NextFunction):void => {
    console.error(error);
    next(error);
}
const boomErrorHandler = (error:any, req:Request, res:Response, next:NextFunction):void => {
    if (Boom.isBoom(error)) {
        const { output } = error;
        res.status(output.statusCode).json(output.payload);
    }
    next(error);
}
const errorHandler = (error:any, req:Request, res:Response, next:NextFunction):void => {
    const typeError:TypeErrors = {
        message: error.message,
        stack: error.stack
    }
    res.status(500).json(typeError)
}

export {logErrors, boomErrorHandler, errorHandler}