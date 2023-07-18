import {Request, Response, NextFunction} from "express";
import {Schema} from "joi";
import Boom from '@hapi/boom'
enum Property {
    body = 'body',
    query = "query",
    params = "params"
}
const validatorHandlers = <T>(schema:Schema<T>, property:Property)=> {
    return function (req:Request, res:Response, next:NextFunction):void{
        const data = req[property]
        const {error} = schema.validate(data, {abortEarly: false} )
        if (error){
            next(Boom.badRequest(error))
        }
        next()
    }
}
export {validatorHandlers, Property};