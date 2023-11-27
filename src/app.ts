import {config} from './config';
import express, {Express, Request, Response} from 'express';
import routesApi from './routes/index.routes';
import DBConnect from './config/db.config';

const app: Express = express();

const port = config.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1', routesApi);

app.use((req: Request, res: Response)=>{
    res.status(400).send('El recurso no existe');
})


const start = async (): Promise<void>=>{
    try {
        await DBConnect.authenticate()
            .then(()=>{
                console.log('Sequalice autenticado correctamente');
                return DBConnect.sync({force: true});
            })
            .then(()=>{
                console.log('Sequalice iniciado correctamente');
                app.listen(port, ()=>{
                    console.log(`Running localhost:${port}`);
                });
            })
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

start(); 

//TODO COMPLETAR MODELO DE CITAS
//TODO INICIAR CON LA CREACION DE CONTROLLERS