import { BasicDoctor } from "./Doctor.interface";
import { BasicEspecialidad } from "./Especialidad.interface";
import { BasicPaciente } from "./Paciente.interface";

export interface CitaMedicaInterface extends BasicEspecialidad, BasicDoctor, BasicPaciente{
    fecha: Date;
    consultorio: string;
}