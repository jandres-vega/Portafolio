import {Request, Response, NextFunction} from "express";
import {Project} from "../../../types/type.projects";
import ServicesProjects from "../../../services/services.projects";


const serviceProjects = new ServicesProjects();
const controllerProject = async (req:Request, res:Response, next:NextFunction):Promise<void> => {
    try {
        const body:Project = req.body;
        const newProject = await serviceProjects.addProject(body);
        res.status(200).send(newProject);
    }catch (e) {

        next(e);
    }
}
export default controllerProject;