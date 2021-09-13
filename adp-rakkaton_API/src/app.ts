import expres,{ Application } from 'express';
import morgan from 'morgan';
import { errorHandler } from './middlewares/error-handler';
import { NotFoundError } from './errors/not-found-error';


export class App {
    private app: Application;

    constructor( private port?:number | string) {
        this.app = expres();
        this.setting()
        this.middlewares()
        this.routes()
    }

    setting() {
        this.app.set('port', this.port || 3000)
    }

    middlewares() {
        this.app.use(morgan('dev'))
        this.app.use(expres.json())
    }

    routes() {
        // this.app.use(ContainerDispatchRoutes)
        // this.app.use(NotificatiosRoutes)

        this.app.all('*', async(req, res)=>{
            throw new NotFoundError();
            
        })

        this.app.use(errorHandler);

    }

    async listen () {
        this.app.listen(this.app.get('port'))
        console.log(`Server on port ${this.app.get('port')}`)
    }
    
}


