import * as express from "express";

export default class AnimalRoute {
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {
        res.type("text/html");
<<<<<<< HEAD
        res.send("yeah boi"); 
=======
        res.send("yeah boi");
  // res.send("C:\Users\Junbo\Desktop\raptors\src\routes\AnimalRoutes\assests\Images\2596-sunshine-1920x1080-nature-wallpaper.jpg");
     res.send('<img src="/images/sun.jpg" id="sun" style="display:none"/>'"');
     var img: HTMLImageElement;
    var x: number = 50;
    var y: number = 50;
    
>>>>>>> 0f0f20bf4ddca5a0adf6e263de5cec9682271031
    }   
 }    