export interface BasicPersona{
    cedula: string;
}

export interface PersonaInterface extends BasicPersona{
    nombre: string;
    apellido: string;
}