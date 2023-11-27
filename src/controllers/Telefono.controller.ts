import { Request, Response } from "express";
import Telefono from '../models/Telefono.model';

class TelefonoController {

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            let telefonos: Telefono[] = await Telefono.findAll();
            return (telefonos) ? res.status(200).json(telefonos) : res.status(500).send('No hay registros en la tabla Telefonos');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async insert(req: Request, res: Response): Promise<Response> {
        try {
            const telefono: Telefono = new Telefono(req.body);
            const result: Telefono = await telefono.save();
            return (result) ? res.status(200).json(result) : res.status(500).send('No se pudo registrar la Telefono');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async update(req: Request, res: Response): Promise<Response>{
        try {
            const {tel} = req.params;
            const telefono: Telefono = new Telefono(req.body);
            const result = await Telefono.update(telefono.dataValues, {where: {telefono: tel}});
            return (result) ? res.status(200).json(result) : res.status(200).send('No se actualizo ningun registro');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async delete(req: Request, res: Response): Promise<Response>{
        const {tel} = req.params;
        const result = Telefono.destroy({where: {telefono: tel}})
        return (result) ? res.status(200).json(result) : res.status(200).send('No se elimino ningun registro');
    }

}

export default new TelefonoController();
