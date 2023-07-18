import {Document} from 'mongoose';
interface User {
    fullName: string,
    email: string,
    password: string,
    age: number,
    cellPhone: string,
    socialNetworks: [string , string, string]
}
interface DocumentUser extends User, Document{}

export {DocumentUser, User};