import express, {Router} from 'express';
import controllers from "../controllers/index";
const routesCita: Router = express.Router();

routesCita.get('/', controllers.CitaController.getAll);
routesCita.post('/', controllers.CitaController.insert);
routesCita.patch('/:cedula/:licencia/:id', controllers.CitaController.update);
routesCita.delete('/:cedula/:licencia/:id', controllers.CitaController.delete);

export default routesCita; 