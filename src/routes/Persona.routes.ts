import express, {Router} from 'express';
import controllers from "../controllers/index";
const routesPersona: Router = express.Router();

routesPersona.get('/', controllers.PersonaController.getAll);
routesPersona.post('/', controllers.PersonaController.insert);
routesPersona.patch('/:cc', controllers.PersonaController.update);
routesPersona.delete('/:cc', controllers.PersonaController.delete);

export default routesPersona; 