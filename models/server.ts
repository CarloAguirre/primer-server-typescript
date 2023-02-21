import express, {Application} from 'express';
import userRoutes from '../routes/usuarios';
import cors from 'cors';


class Server{

    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios',
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        //definir rutas//
        this.middlewares();
        this.routes();
    }

    //TODO: conectar base de datos

    middlewares(){
        this.app.use(cors())

        //lectura del body
        this.app.use(express.json())

        //carpeta publica
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en puerto ' + this.port)
        })
    };
};

export default Server;