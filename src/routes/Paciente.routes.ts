import express, {Router} from 'express';
import controllers from "../controllers/index";
const routesPaciente: Router = express.Router();

routesPaciente.get('/', controllers.PacienteController.getAll);
routesPaciente.post('/', controllers.PacienteController.insert);
routesPaciente.patch('/:cc', controllers.PacienteController.update);
routesPaciente.delete('/:cc', controllers.PacienteController.delete);

export default routesPaciente; 