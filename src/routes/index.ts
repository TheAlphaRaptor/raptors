import * as express from "express";
var app = express();


export default class IndexRoute {
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {
        res.type("text/html");
        res.send("<p> Add these to the URL for better effects (yes) (your MOM): \n /extreme \n /rain \n /sunshine </p>"); 

    }
    
}