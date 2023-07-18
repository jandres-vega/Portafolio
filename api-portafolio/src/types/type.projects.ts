import {Document} from "mongoose";

interface Project {
    name_project: string,
    image_project: string,
    creation_date: Date,
    description: string,
    repository_link: string,
    deployment_link:string
}

interface DocumentProject extends Project, Document{}

export {Project, DocumentProject};