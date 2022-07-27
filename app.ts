import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as fs from 'fs';
import { APILogger } from './config/logger/api.logger';

/**
 * Entry point for the application
 * @param 
 */
class App {
    public express: express.Application;
    public logger: APILogger;

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new APILogger()
    }
    
    /**
     * All the routes will be loaded into express
     */
    private routes(): void {
        this.express.get('/', (req, res, next) => {
            this.logger.info("All checks ok", new Date());
            res.send("Typescript App works!!");
        })
    }
    /**
     * This method contains all the middlewares
     * @returns void
     */
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }))
    }


}


