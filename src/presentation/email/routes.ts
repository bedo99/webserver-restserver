import { Router } from "express";
import { EmailController } from "./controller";

export class EmailRoutes {

    static get routes(): Router {

        const router = Router();
        const emailController = new EmailController();

        router.get('/', emailController.sendEmail );
        router.get('/:id', emailController.getEmailByid );
        router.post('/', emailController.createEmail );
        router.put('/:id', emailController.updateEmail );
        router.delete('/:id', emailController.deleteEmail );
         
        return router;
    }
}