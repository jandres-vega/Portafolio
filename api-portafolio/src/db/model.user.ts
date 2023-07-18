import {Schema, model} from "mongoose";
import {DocumentUser} from "../types/type.user";

const schemaUser = new Schema<DocumentUser>({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    cellPhone: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    socialNetworks:{
        type: [String],
        required: true
    }
})

export const ModelUser = model("User", schemaUser);