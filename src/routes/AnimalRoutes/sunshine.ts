import * as express from "express";

export default class AnimalRoute {
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {
<<<<<<< HEAD
        res.sendFile(__dirname + "/assets/Images/sun.jpg")
    }   
}
=======
        res.type("text/html");
        res.send("yeah boi"); 
    }   
 }    
>>>>>>> fab4a839db8f881192eb86202c912899850e9be5
