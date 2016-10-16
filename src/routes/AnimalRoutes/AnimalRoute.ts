import * as express from "express";

export default class AnimalRoute{
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {
        res.type("text/html");
        res.send("<p> Here are the current directories: \n extreme \n sunshine \n rain </p>"); 

}

