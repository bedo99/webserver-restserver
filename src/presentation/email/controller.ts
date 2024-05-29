import { Request, Response } from "express";

const EmailsUserData = [
    { id: 1, name: 'Jhon Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
    { id: 3, name: 'Dave Doe', age: 28 }
]

export class EmailController {

    //* Dependencies Injections
    constructor() {}

    public sendEmail = (req: Request, res: Response) => {
        return res.json(EmailsUserData)
    };

    public getEmailByid = (req: Request, res: Response) => {
        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({ error: `El parametro Id no es un numero` })
        const email = EmailsUserData.find((email) => email.id === id);
        
        ( email ) 
            ? res.json(email)
            : res.status(404).json({ error: `Email con id ${id} no existe` })
        
    };

    public createEmail = (req: Request, res: Response) => {

        const { name, age } = req.body
        if ( !name ) return res.status(400).json({ error: `El parametro 'name' es requerido` })
        
        EmailsUserData.push({
            id: EmailsUserData.length + 1,
            name,
            age
        });
        return res.json(EmailsUserData)
    };

    public updateEmail = (req: Request, res: Response) => {

        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({ error: `El parametro Id no es un numero` })

        const email = EmailsUserData.find((email) => email.id === id)
        if ( !email ) return res.status(404).json({ error: `El email con ${id} que quieres acutalizar no existe` })

        const { name, age } = req.body
        
        email.name = name || email.name
        email.age = age || email.age
        return res.json(email)

    };

    public deleteEmail = (req: Request, res: Response) => {

        const id = +req.params.id;
        if (isNaN(id)) return res.status(400).json({ error: `El parametro Id no es un numero` })

        const email = EmailsUserData.find((email) => email.id === id)
        if ( !email ) return res.status(404).json({ error: `El email con ${id} que quieres eliminar ya no existe` })

        EmailsUserData.splice(EmailsUserData.indexOf(email), 1);

        return res.json(email)
        
    };

}