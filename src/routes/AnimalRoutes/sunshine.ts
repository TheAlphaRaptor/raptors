import * as express from "express";

export default class AnimalRoute{
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {
        res.type("text/html");
  // res.send("C:\Users\Junbo\Desktop\raptors\src\routes\AnimalRoutes\assests\Images\2596-sunshine-1920x1080-nature-wallpaper.jpg");
     
    }   
    
}