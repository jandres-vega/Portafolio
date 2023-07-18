import {Router} from "express";
import controllerUser from "../controllers/user/POST/controller.user";
import {validatorHandlers, Property} from "../middlewares/validator.handlers";
import {schemaUser} from "../schemas/schema.user";

const router = Router();

router.post('/',validatorHandlers(schemaUser, Property.body), controllerUser)

export default router;

