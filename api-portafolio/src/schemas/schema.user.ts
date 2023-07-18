import joi from 'joi';
import {User} from "../types/type.user";

const schemaUser:joi.ObjectSchema<User> = joi.object({
    fullName: joi.string(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    cellPhone: joi.string().required(),
    age:joi.number().required(),
    socialNetworks: joi.array().length(3)
})


export {schemaUser}
