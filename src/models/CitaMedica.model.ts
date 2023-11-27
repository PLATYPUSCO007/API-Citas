import {DataType, Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt, ForeignKey} from 'sequelize-typescript';
import { CitaMedicaInterface } from '../interfaces/CitaMedica.interface';
import Paciente from './Paciente.model';
import Especialidad from './Especialidad.model';
import Doctor from './Doctor.model';

@Table({
    timestamps: true,
    tableName: 'Cita'
})
class CitaMedica extends Model implements CitaMedicaInterface{

    @ForeignKey(() => Paciente)
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true
    })
    cedula!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    consultorio!: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    fecha!: Date;

    @ForeignKey(() => Especialidad)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true
    })
    id!: number;

    @ForeignKey(() => Doctor)
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true
    })
    licencia!: string;

    @CreatedAt
    creationDate!: Date;
  
    @UpdatedAt
    updatedOn!: Date;
  
    @DeletedAt
    deletionDate!: Date;
}

export default CitaMedica;