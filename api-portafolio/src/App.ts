import express, {Express} from "express";
import morgan from 'morgan';
import {errorHandler, boomErrorHandler, logErrors} from "./middlewares/error.handlers";
import routes from "./routes";

const app: Express = express();

app.use(morgan("dev"));
app.use(express.json());

routes(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);
export default app;