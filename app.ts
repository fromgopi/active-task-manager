import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as swaggerUi from 'swagger-ui-express';
import * as fs from 'fs';
import { APILogger } from './config/logger/api.logger';
import { connect } from './config/db/db.config'; 
import 'dotenv/config';
 
/** 
 * Entry point for the application
 * @param  
 */  
class App { 
    public express: express.Application; 
    public logger: APILogger;
    private db: any

    constructor() {
        this.express = express();
        // this.loadConfig();
        this.logger = new APILogger();
        this.middleware();
        this.routes();
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
        this.db = connect();
    }
}

export default new App().express
