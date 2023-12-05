// CONFIGURA A INICIALIZAÇÃO DO PROJETO
import express, {Request, Response, NextFunction} from 'express';
import { router } from './routes';
import 'express-async-errors'
import cors from 'cors'


const app = express();

app.use(express.json());
app.use(cors())
app.use(router);

app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof Error){
        // Se instancia de ERROR
        if(res.status(400)){
            return res.status(400).json({
                error: err.message
            })
        }else if (res.status(500)){
            return res.status(500).json({
                error: err.message
            })
        }else{
            return res.json({
                error: err.message
            })
        }
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    })
})

app.listen(3333, () => console.log('Server on!'));