import express, {Router} from 'express';
import routesApi from './index';

const router: Router = express.Router();

router.use('/persona', routesApi.routesPersona);
router.use('/paciente', routesApi.routesPaciente);
router.use('/doctor', routesApi.routesDoctor);
router.use('/esp', routesApi.routesEspecialidad);
router.use('/telefono', routesApi.routesTelefono);
router.use('/cita', routesApi.routesCita);

export default router;

