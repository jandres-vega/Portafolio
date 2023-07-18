import {Express} from "express";
import routerUser from './user.routes';
import routerProject from './project.routes'
const index = (app: Express):void => {
    app.use('/user', routerUser);
    app.use('/project', routerProject)
}
export default index