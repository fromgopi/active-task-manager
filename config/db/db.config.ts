import { Sequelize } from "sequelize-typescript";
import { APILogger } from "../logger/api.logger"
const logger = new APILogger();

/**
 * Connect is a function which will connect to the db
 * @returns DB Config Object
 */
export const connect = () => {
    const host = process.env.HOST
    const user = process.env.USER
    const password = process.env.PASSWORD
    const db = process.env.DB

    const dialect: any = process.env.DIALECT
    logger.info(dialect)

    const operatorsAliases: any = false

    const sequelize = new Sequelize(db, user, password, {
        host: host,
        dialect,
        operatorsAliases,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
    })
    sequelize.authenticate()
    .then(() => {
        logger.info("Connected")
    })
    .catch(() => {
        logger.error("Not connected")
    })
    const dbConfig: any = {};
    dbConfig.Sequelize = Sequelize;
    dbConfig.sequelize = sequelize;
    
    return dbConfig;
}