import {Document} from "mongoose";

interface Technologies {
    technologies: string,
    image_technologies: string
}

interface DocumentTechnologies extends Technologies, Document{}

export {Technologies, DocumentTechnologies}