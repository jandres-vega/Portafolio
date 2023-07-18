import {model, Schema} from "mongoose";
import {DocumentTechnologies} from "../types/type.technologies";

const schemaTechnologies = new Schema<DocumentTechnologies>({
    technologies: {
        type: String,
        required: true
    },
    image_technologies: {
        type: String,
        required: true
    }
})

export const ModelTecnologie = model('Technologies', schemaTechnologies)