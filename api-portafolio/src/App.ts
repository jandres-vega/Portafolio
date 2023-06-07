import express, {Express} from "express";
import morgan from 'morgan';
import routes from "./routes";

const app: Express = express();

app.use(morgan("dev"));
app.use(express.json())


routes(app)

export default app;