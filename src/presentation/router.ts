import { Router } from "express";
import { EmailRoutes } from "./email/routes";

export class AppRouter {
    static get routes(): Router {

        const router = Router();

        //* 400 Bad Request - El usuario o la persona que quiere llamar a mi endpoint me esta enviando mal la información
        //* 404 Error - Existio un error al momento de estar manejando los datos y controlandolos

        router.use('/api/email', EmailRoutes.routes);
        router.use('/api/auth', EmailRoutes.routes);
        router.use('/api/users', EmailRoutes.routes);
         
        return router;
    }
}