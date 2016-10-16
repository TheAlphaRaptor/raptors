import * as express from "express";

export default class AnimalRoute{
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {
//<<<<<<< HEAD
        res.type("text/html");
        res.send("yeah boi");
  // res.send("C:\Users\Junbo\Desktop\raptors\src\routes\AnimalRoutes\assests\Images\2596-sunshine-1920x1080-nature-wallpaper.jpg");
     res.send('<img src="/images/sun.jpg" id="sun" style="display:none"/>'"');
     var img: HTMLImageElement;
    var x: number = 50;
    var y: number = 50;
    
    }   
//=======

    }
//>>>>>>> a007d30d2c3f4e82bade920b253086c2b4255df7
    
