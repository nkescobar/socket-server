import bodyParser from 'body-parser';
import { SERVER_PORT } from './enviroment/enviroment';
import Server from './models/server';
import router from './routes/router';
import express from 'express';

import cors from 'cors';

const server = new Server();

// Body parser
server.app.use(express.urlencoded({extended:true})); 
server.app.use(express.json());

//cors
server.app.use( cors({origin: true, credentials: true}));

//rutas de servicios
server.app.use('/', router );

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port} !!`)
});