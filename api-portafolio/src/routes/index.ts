import {Express} from "express";
import routerUser from './user.routes';
const index = (app: Express):void => {
    app.use('/', routerUser);
}
export default index