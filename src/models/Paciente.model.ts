import { PacienteInterface } from "../interfaces/Paciente.interface";
import {DataType, Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import Telefono from './Telefono.model';
import Persona from './Persona.model';
import CitaMedica from "./CitaMedica.model";

@Table({
    timestamps: true,
    tableName: 'Paciente'
})
class Paciente extends Model implements PacienteInterface{

    apellido!: string;
    nombre!: string;
    
    @ForeignKey(() => Persona)
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    })
    cedula!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    edad!: number;

    @HasMany(()=>Telefono)
    telefonos?: Telefono[];

    @HasMany(()=>CitaMedica)
    citas?: CitaMedica[];

    // @BelongsTo(()=>Persona)
    // paciente?: Persona;

    @CreatedAt
    creationDate!: Date;
  
    @UpdatedAt
    updatedOn!: Date;
  
    @DeletedAt
    deletionDate!: Date;
}

export default Paciente;