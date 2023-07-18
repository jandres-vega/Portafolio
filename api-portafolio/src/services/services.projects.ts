import {Document} from "mongoose";
import {DocumentProject, Project} from "../types/type.projects";
import Boom from '@hapi/boom';
import {ModelProject} from "../db/model.project";

class ServicesProjects {
    async findAllProjects() {
        return ModelProject.find()
    }

    async getProjectById(id:string):Promise<Document<DocumentProject>>{
        const findProject:Document<DocumentProject> | null = await ModelProject.findById(id);
        if (findProject === null){
            throw Boom.notFound("No se encontro el projecto");
        }else {
            return findProject
        }
    }
    async addProject(project:Project) {
        const newProject = await new ModelProject(project);
        const projects = await this.findAllProjects();
        const findProject = projects.find(proj => {
            if (proj.repository_link === project.repository_link){
                return proj
            }
        })
        if (findProject){
            throw  Boom.conflict("El proyecto ya se encuentra repetido")
        }else {
            return newProject.save()
        }
    }
}
export default ServicesProjects;