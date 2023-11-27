import { Request, Response } from "express";
import Doctor  from '../models/Doctor.model';

class DoctorController {

    public async getAll(req: Request, res: Response): Promise<Response> {
        try {
            let doctores: Doctor[] = await Doctor.findAll();
            return (doctores) ? res.status(200).json(doctores) : res.status(500).send('No hay registros en la tabla doctores');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async insert(req: Request, res: Response): Promise<Response> {
        try {
            const doctor: Doctor = new Doctor(req.body);
            const result: Doctor = await doctor.save();
            return (result) ? res.status(200).json(result) : res.status(500).send('No se pudo registrar la doctor');
        } catch (error) {
            console.error(error);
            return res.status(400).send(error);
        }
    }

    public async update(req: Request, res: Response): Promise<Response>{
        try {
            const {licencia} = req.params;
            const doctor: Doctor = new Doctor(req.body);
            const result = await Doctor.update(doctor.dataValues, {where: {licencia: licencia}});
            return (result) ? res.status(200).json(result) : res.status(200).send('No se actualizo ningun registro');
        } catch (error) {
            return res.status(400).send(error);
        }
    }

    public async delete(req: Request, res: Response): Promise<Response>{
        const {licencia} = req.params;
        const result = Doctor.destroy({where: {licencia: licencia}})
        return (result) ? res.status(200).json(result) : res.status(200).send('No se elimino ningun registro');
    }

}

export default new DoctorController();
