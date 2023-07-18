import {ModelUser} from "../db/model.user";
import {User} from '../types/type.user';
import Boom from "@hapi/boom";

class ServicesUser {
    async addUser(user:User) {
        const userNew = await new ModelUser(user);
        const {age} = userNew;
        if (!age){
            throw Boom.badRequest("Ingresas")
        }else {
            return userNew.save();
        }
    }
}
export default ServicesUser;