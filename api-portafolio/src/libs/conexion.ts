import mongoose from 'mongoose';
import {config} from '../config';
const URL = `mongodb+srv://${config.user_db}:${config.password_db}@demo.libza8m.mongodb.net/${config.name_db}`;
const connect = async():Promise<void> => {
    await mongoose.connect(URL)
}
export default connect;