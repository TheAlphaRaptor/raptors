import * as express from "express";
var app = express();


export default class IndexRoute {
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {
        res.type("text/html");
        res.send("<p> Here are the current directories: \n Meme \n Cat \n Dog </p>"); 

    }
    
}