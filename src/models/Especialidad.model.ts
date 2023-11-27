import { EspecialidadInterface } from "../interfaces/Especialidad.interface";
import {DataType, Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt, HasMany} from 'sequelize-typescript';
import Doctor from "./Doctor.model";
import CitaMedica from "./CitaMedica.model";

@Table({
    timestamps: true,
    tableName: 'Especialidad'
})
class Especialidad extends Model implements EspecialidadInterface{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    titulo!: string;

    @HasMany(()=>Doctor)
    doctores?: Doctor[];

    @HasMany(()=>CitaMedica)
    citas?: CitaMedica[];

    @CreatedAt
    creationDate!: Date;
  
    @UpdatedAt
    updatedOn!: Date;
  
    @DeletedAt
    deletionDate!: Date;
}

export default Especialidad;