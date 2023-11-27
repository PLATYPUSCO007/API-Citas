import { Request, Response } from "express";
import Paciente  from '../models/Paciente.model';

class PacienteController {

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            let pacientes: Paciente[] = await Paciente.findAll();
            return (pacientes) ? res.status(200).json(pacientes) : res.status(500).send('No hay registros en la tabla pacientes');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async insert(req: Request, res: Response): Promise<Response> {
        try {
            const paciente: Paciente = new Paciente(req.body);
            const result: Paciente = await paciente.save();
            return (result) ? res.status(200).json(result) : res.status(500).send('No se pudo registrar la paciente');
        } catch (error) {
            console.error(error);
            return res.status(400).send(error);
        }
    }

    public async update(req: Request, res: Response): Promise<Response>{
        try {
            const {cc} = req.params;
            const persona: Paciente = new Paciente(req.body);
            const result = await Paciente.update(persona.dataValues, {where: {cedula: cc}});
            return (result) ? res.status(200).json(result) : res.status(200).send('No se actualizo ningun registro');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async delete(req: Request, res: Response): Promise<Response>{
        const {cc} = req.params;
        const result = Paciente.destroy({where: {cedula: cc}})
        return (result) ? res.status(200).json(result) : res.status(200).send('No se elimino ningun registro');
    }

}

export default new PacienteController();
