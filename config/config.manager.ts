import { Config } from './config';
import * as nconf from 'nconf'

export class ConfigManager {
    private config: Config;

    constructor() {
        this.init();
    }
    
    private init() {
        nconf.use("memory");

        if (!nconf.get("info")) {
            this.getFile();
        }
        this.config = nconf.get();
        nconf.required(["port"]);
    }

    private getFile(): void {
        nconf.env(["APP_ENV"]).file("default", {
            file: "default.json",
            dir: "env",
            type: "json",
            search: true,
        });
        const filename = `${process.env.APP_ENV}.json`;
        console.log(filename);
        nconf.file({
            file: filename,
            dir: "env",
            search: true,
            type: "json",
        });
    }
}

