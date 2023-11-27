import { PersonaInterface } from "../interfaces/Persona.interface";
import {DataType, Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt, HasMany} from 'sequelize-typescript';
import Paciente from './Paciente.model';
import Doctor from "./Doctor.model";

@Table({
    timestamps: true,
    tableName: 'Persona'
})
class Persona extends Model implements PersonaInterface{
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true
    })
    cedula!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    apellido!: string;


    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    nombre!: string;

    @HasMany(()=>Paciente)
    pacientes!: Paciente[];

    @HasMany(()=>Doctor)
    doctores!: Doctor[];

    @CreatedAt
    creationDate!: Date;
  
    @UpdatedAt
    updatedOn!: Date;
  
    @DeletedAt
    deletionDate!: Date;

}

export default Persona;