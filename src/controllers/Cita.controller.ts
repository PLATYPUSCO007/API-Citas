import { Request, Response } from "express";
import Cita  from '../models/CitaMedica.model';

class CitaController {

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            let citas: Cita[] = await Cita.findAll();
            return (citas) ? res.status(200).json(citas) : res.status(500).send('No hay registros en la tabla Cites');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async insert(req: Request, res: Response): Promise<Response> {
        try {
            const cita: Cita = new Cita(req.body);
            const result: Cita = await cita.save();
            return (result) ? res.status(200).json(result) : res.status(500).send('No se pudo registrar la Cita');
        } catch (error) {
            console.error(error);
            return res.status(400).send(error);
        }
    }

    public async update(req: Request, res: Response): Promise<Response>{
        try {
            const {cedula, licencia, id} = req.params;
            const cita: Cita = new Cita(req.body);
            const result = await Cita.update(cita.dataValues, {where: {licencia: licencia, cedula: cedula, id}});
            return (result) ? res.status(200).json(result) : res.status(200).send('No se actualizo ningun registro');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async delete(req: Request, res: Response): Promise<Response>{
        const {cedula, licencia, id} = req.params;
        const result = Cita.destroy({where: {licencia: licencia, cedula: cedula, id}})
        return (result) ? res.status(200).json(result) : res.status(200).send('No se elimino ningun registro');
    }

}

export default new CitaController();
