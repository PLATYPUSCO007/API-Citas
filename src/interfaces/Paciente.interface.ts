import { CitaMedicaInterface } from "./CitaMedica.interface";
import { PersonaInterface, BasicPersona } from "./Persona.interface";
import { TelefonoInterface } from "./Telefono.interface";

export interface BasicPaciente extends BasicPersona{
}

export interface PacienteInterface extends PersonaInterface{
    edad: number;
    telefonos?: TelefonoInterface[];
    citas?: CitaMedicaInterface[];
}