import { CitaMedicaInterface } from "./CitaMedica.interface";
import { DoctorInterface } from "./Doctor.interface";

export interface BasicEspecialidad{
    id: number;
}

export interface EspecialidadInterface extends BasicEspecialidad{
    titulo: string;
    doctores?: DoctorInterface[];
    citas?: CitaMedicaInterface[];
}