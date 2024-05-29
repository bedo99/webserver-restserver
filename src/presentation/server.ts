import express from 'express';

interface Options {
    PORT: number,
    PUBLIC_PATH?: string
}

export class Server {

    private app = express();

    async start(){

        //* Middlewares

        //* Public Folder
        this.app.use(express.static('public'))

        this.app.listen(3000, ()=> {
            console.log('server running on port 3000');
        })
        
    }
}