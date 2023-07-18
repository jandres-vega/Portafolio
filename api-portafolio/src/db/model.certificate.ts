import {model, Schema} from "mongoose";
import {DocumentCertificate} from "../types/type.certificate";

const schemaCertificate = new Schema<DocumentCertificate>({
    name_certificate: {
        type: String,
        required: true
    },
    archivo_pdf: {
        type: Buffer,
        required: true
    }
})

export const ModelCertificate = model("Certicate", schemaCertificate)