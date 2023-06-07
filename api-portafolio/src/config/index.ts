import dotenv from 'dotenv';
dotenv.config();
import Config from '../types/type.config';
export const config:Config = {
    name_db: process.env.NAME_DB as string,
    password_db: process.env.PASSWORD as string,
    port_server: process.env.PORT_SERVER as string,
    user_db: process.env.USER_DB as string
}
