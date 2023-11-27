import {Sequelize} from 'sequelize-typescript';
import {config} from './index';

import models from "../models/index";

const db_name = config.DB_NAME as string;
const db_user = config.DB_USER as string;
const db_port = Number(config.DB_PORT);

const SequelizeConnection: Sequelize = new Sequelize({
    database: db_name,
    dialect: 'mysql',
    username: db_user,
    password: config.DB_PASS,
    port: db_port,
    host: config.DB_PATH,
    logging: console.log,
    models: [models.Paciente, models.Persona, models.Telefono, models.Especialidad, models.Doctor, models.Citas]
});

export default SequelizeConnection;
