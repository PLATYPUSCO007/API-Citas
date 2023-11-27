import express, {Router} from 'express';
import controllers from "../controllers/index";
const routesTelefono: Router = express.Router();

routesTelefono.get('/', controllers.TelefonoController.getAll);
routesTelefono.post('/', controllers.TelefonoController.insert);
routesTelefono.patch('/:tel', controllers.TelefonoController.update);
routesTelefono.delete('/:tel', controllers.TelefonoController.delete);

export default routesTelefono; 