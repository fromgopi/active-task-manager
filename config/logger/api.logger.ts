const pine = require('pine');

const logger = pine()

/**
 * API Logger class
 */
export class APILogger {
    
    info(message: any, data=new Date()) {
        logger.info(`${message}   ${undefined != data ? JSON.stringify(data) : ''}`);
    }

    error(message: any) {
        logger.error(message);
    }
}



