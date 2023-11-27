import { Request, Response } from "express";
import Especialidad  from '../models/Especialidad.model';

class EspecialidadController {

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            let especialidades: Especialidad[] = await Especialidad.findAll();
            return (especialidades) ? res.status(200).json(especialidades) : res.status(500).send('No hay registros en la tabla especialidades');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async insert(req: Request, res: Response): Promise<Response> {
        try {
            const especialidad: Especialidad = new Especialidad(req.body);
            const result: Especialidad = await especialidad.save();
            return (result) ? res.status(200).json(result) : res.status(500).send('No se pudo registrar la especialidad');
        } catch (error) {
            console.error(error);
            return res.status(400).send(error);
        }
    }

    public async update(req: Request, res: Response): Promise<Response>{
        try {
            const {id} = req.params;
            const doctor: Especialidad = new Especialidad(req.body);
            const result = await Especialidad.update(doctor.dataValues, {where: {id: id}});
            return (result) ? res.status(200).json(result) : res.status(200).send('No se actualizo ningun registro');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async delete(req: Request, res: Response): Promise<Response>{
        const {id} = req.params;
        const result = Especialidad.destroy({where: {id: id}})
        return (result) ? res.status(200).json(result) : res.status(200).send('No se elimino ningun registro');
    }

}

export default new EspecialidadController();
