import express, { Router } from 'express';
import path from 'path';

interface Options {
    port: number;
    routes: Router;
    publicPath?: string;
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly routes: Router;
    private readonly publicPath: string;

    constructor(options: Options) {
        const { port, routes, publicPath = 'public' } = options
        this.port = port
        this.publicPath = publicPath
        this.routes = routes
    }

    async start(){

        //* Middlewares
        this.app.use( express.json() ) // Cualquier request que llegue se va a transformar en un objeto json o va a permitir body de tipo: raw ( JSON )
        this.app.use( express.urlencoded({ extended: true }) ) // Tambien queremos que algunos endpoints puedan tener en su body data de tipo: x-www-form-urlencoded | form-data  

        //* Public Folder
        this.app.use(express.static(this.publicPath))

        //* Routes
        this.app.use(this.routes)

        //* SPA - Cualquier ruta no definida , va a pasar por aqui
        this.app.get('*', (req, res) => {
            const indexPath = path.join( __dirname + `../../../${this.publicPath}/index.html`);
            res.sendFile(indexPath);
        })

        this.app.listen(this.port, ()=> {
            console.log('server running on port 3000');
        })
        
    }
}