import * as express from "express";

export default class AnimalRoute {
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {
        res.type("text/html");
        res.send("<img src= http://efdreams.com/data_images/dreams/rain/rain-02.jpg width=750>");
        
    }
}