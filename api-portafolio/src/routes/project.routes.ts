import {Router} from "express";
import crearProjects from "../controllers/project/POST/controller.projects";
import getProjects from '../controllers/project/GET/controller.projects';
const router = Router();

router.get('/', getProjects)
router.post('/', crearProjects)
export default router;