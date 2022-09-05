import * as http from 'http';
import App from './src/app';
import { APILogger } from './config/logger/api.logger';

const port = 8000
App.set("port", port);
const server = http.createServer(App);
const logger = new APILogger();
server.listen(port);

server.on("listening", function() {
    const addr = server.address();
    const bind = (typeof addr === "string") ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info(`Listening on ${bind}`, null);
})

module.exports = App;


