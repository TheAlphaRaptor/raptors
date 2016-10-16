import * as express from "express";

export default class AnimalRoute {
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {

        res.sendFile(__dirname + "/assets/Images/sun.jpg")
    }   
}

        res.type("text/html");
        res.send("yeah boi"); 
    }   
 }    

