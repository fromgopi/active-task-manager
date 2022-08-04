import { Config } from './config';
import * as nconf from 'nconf'

export class ConfigManager {
    private conf: Config;

    constructor() {
        this.init();
    }
    
    public get config(): Config {
        return this.conf;
    }
    private init() {
        nconf.use("memory");

        if (!nconf.get("info")) {
            this.getFile();
        }
        this.conf = nconf.get();
        // const port = "8000";
        // nconf.required([port]);
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




