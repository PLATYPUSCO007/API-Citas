import { Request, Response } from "express";
import Persona from '../models/Persona.model';

class PersonaController {

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            let personas: Persona[] = await Persona.findAll();
            return (personas) ? res.status(200).json(personas) : res.status(500).send('No hay registros en la tabla personas');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async insert(req: Request, res: Response): Promise<Response> {
        try {
            const persona: Persona = new Persona(req.body);
            const result: Persona = await persona.save();
            return (result) ? res.status(200).json(result) : res.status(500).send('No se pudo registrar la persona');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async update(req: Request, res: Response): Promise<Response>{
        try {
            const {cc} = req.params;
            const persona: Persona = new Persona(req.body);
            const result = await Persona.update(persona.dataValues, {where: {cedula: cc}});
            return (result) ? res.status(200).json(result) : res.status(200).send('No se actualizo ningun registro');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async delete(req: Request, res: Response): Promise<Response>{
        const {cc} = req.params;
        const result = Persona.destroy({where: {cedula: cc}})
        return (result) ? res.status(200).json(result) : res.status(200).send('No se elimino ningun registro');
    }

}

export default new PersonaController();
