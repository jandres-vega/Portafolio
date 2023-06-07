import express, {Express, Request, Response} from 'express';

const app: Express = express();

app.get('/', (req:Request, res:Response):void => {
    res.send('hello word')
})

app.listen(3000, () => {
    console.log("Liste on port 3000")
})