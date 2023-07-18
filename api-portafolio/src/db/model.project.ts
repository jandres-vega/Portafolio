import {model, Schema} from "mongoose";
import {DocumentProject} from "../types/type.projects";

const schemaProjects = new Schema<DocumentProject>({
    name_project: {
        type: String,
        required: true
    },
    image_project: {
        type: String,
        required: true
    },
    creation_date: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        maxLength: [400, 'La descripcion no puede superar mas de los 200 caracteres'],
        minLength: [30, 'La descripcion tiene que tener minimo 30 caracteres']
    },
    repository_link: {
        type: String,
        required: true
    },
    deployment_link: {
        type: String,
        required: true
    }
})

export const ModelProject = model('Projects', schemaProjects)