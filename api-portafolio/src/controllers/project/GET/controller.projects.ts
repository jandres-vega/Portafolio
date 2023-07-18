import {Request, Response, NextFunction} from "express";
import ServicesProjects from "../../../services/services.projects";

const serviceProjects = new ServicesProjects();
const controllerProjects = async(req:Request, res:Response, next:NextFunction):Promise<void> => {
    try {
        const projects = await serviceProjects.findAllProjects();
        res.status(200).send(projects);
    }catch (e) {
        next(e);
    }
}

export default controllerProjects;