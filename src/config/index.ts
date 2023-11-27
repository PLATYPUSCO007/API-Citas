import dotenv from 'dotenv';

if(process.env.NODE_ENV !== 'production') dotenv.config();

export const config = {
    PORT: process.env.PORT,
    DB_PATH: process.env.DB_PATH,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_DRIVER: process.env.DB_DRIVER,
    DB_NAME: process.env.DB_NAME,
}