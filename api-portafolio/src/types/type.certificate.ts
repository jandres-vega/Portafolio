import {Document} from "mongoose";

interface Certificate extends Document{
    name_certificate: string,
    archivo_pdf: Buffer
}

interface DocumentCertificate extends Document, Certificate {}

export {Certificate, DocumentCertificate}