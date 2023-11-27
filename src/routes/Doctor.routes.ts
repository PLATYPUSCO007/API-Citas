import express, {Router} from 'express';
import controllers from "../controllers/index";
const routesDoctor: Router = express.Router();

routesDoctor.get('/', controllers.DoctorController.getAll);
routesDoctor.post('/', controllers.DoctorController.insert);
routesDoctor.patch('/:licencia', controllers.DoctorController.update);
routesDoctor.delete('/:licencia', controllers.DoctorController.delete);

export default routesDoctor; 