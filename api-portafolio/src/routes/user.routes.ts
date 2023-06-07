import {Request, Response, Router} from "express";

const router:Router = Router()

router.get('/', (req:Request, res:Response):void => {
    res.send("Otra Hola mundo")
})

export default router;

