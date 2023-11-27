import { PersonaInterface } from "./Persona.interface";
import { BasicEspecialidad } from "./Especialidad.interface";
import { CitaMedicaInterface } from "./CitaMedica.interface";

export interface BasicDoctor{
    licencia: string;
}

export interface DoctorInterface extends BasicDoctor, PersonaInterface, BasicEspecialidad{
    correo: string;
    citas?: CitaMedicaInterface[];
}