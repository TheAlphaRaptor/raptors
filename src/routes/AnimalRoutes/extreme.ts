import * as express from "express";

export default class AnimalRoute{
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {
        res.type("text/html");
        res.send("<img src= http://wallpapercave.com/wp/8IF8Orn.jpg width=750><iframe width=560 height=315 src=https://www.youtube.com/embed/72aLUzHxnHM frameborder=0 allowfullscreen></iframe>");
 //      res.addListener("Nutshack.mp3"); 
//var Audio: new (src: "..assests/musics/Nutshack.mp3")=> HTMLAudioElement
 //   res.send("<audio controls autoplay><source src=  type=audio/mp3></audio>");
    //res.send("<iframe width=560 height=315 src=https://www.youtube.com/embed/72aLUzHxnHM frameborder=0 allowfullscreen></iframe>");
    }
}