import { DoctorInterface } from "../interfaces/Doctor.interface";
import {DataType, Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, HasMany} from 'sequelize-typescript';
import Especialidad from "./Especialidad.model";
import Persona from "./Persona.model";
import CitaMedica from "./CitaMedica.model";

@Table({
    timestamps: true,
    tableName: 'Doctor'
})
class Doctor extends Model implements DoctorInterface{

    nombre!: string;
    apellido!: string;

    @ForeignKey(() => Persona)
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    cedula!: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    correo!: string;
    
    @ForeignKey(() => Especialidad)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        primaryKey: true,
    })
    licencia!: string;

    @HasMany(()=>CitaMedica)
    citas?: CitaMedica[];
    
    @CreatedAt
    creationDate!: Date;
  
    @UpdatedAt
    updatedOn!: Date;
  
    @DeletedAt
    deletionDate!: Date;
}

export default Doctor;