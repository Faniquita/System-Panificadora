import { Router, Request, Response } from 'express';

const router = Router();

//Tipando req(variavel): Request(tipo)
router.get('/teste', (req: Request, res: Response) => {
    throw new Error('Error ao salvar a requisição!')
})



export { router};