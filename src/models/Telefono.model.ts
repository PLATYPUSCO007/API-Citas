import { TelefonoInterface } from "../interfaces/Telefono.interface";
import {DataType, Model, Table, Column, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo} from 'sequelize-typescript';
import Paciente from "./Paciente.model";


@Table({
    timestamps: true,
    tableName: 'Telefono'
})
class Telefono extends Model implements TelefonoInterface{

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
        unique: true,
        primaryKey: true
    })
    telefono!: string;

    @BelongsTo(()=>Paciente)
    paciente!: Paciente;

    @CreatedAt
    creationDate!: Date;
  
    @UpdatedAt
    updatedOn!: Date;
  
    @DeletedAt
    deletionDate!: Date;
}

export default Telefono;