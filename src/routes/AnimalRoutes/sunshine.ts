import * as express from "express";

export default class AnimalRoute{
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {
        res.type("text/html");
        res.send("yeah boi");
        res.attachment("http://www.meghantelpner.com/wp-content/uploads/2013/07/2596-sunshine-1920x1080-nature-wallpaper.jpg");
    

    }   
}
    
