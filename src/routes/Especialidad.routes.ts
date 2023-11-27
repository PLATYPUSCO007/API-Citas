import express, {Router} from 'express';
import controllers from "../controllers/index";
const routesEsp: Router = express.Router();

routesEsp.get('/', controllers.EspecialidadController.getAll);
routesEsp.post('/', controllers.EspecialidadController.insert);
routesEsp.patch('/:id', controllers.EspecialidadController.update);
routesEsp.delete('/:id', controllers.EspecialidadController.delete);

export default routesEsp; 