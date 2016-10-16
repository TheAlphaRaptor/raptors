import * as express from "express";

export default class AnimalRoute{
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {
        res.type("text/html");
        res.send("woah there")
 //      res.addListener("Nutshack.mp3"); 
//var Audio: new (src: "..assests/musics/Nutshack.mp3")=> HTMLAudioElement
        //res.send("Nutshack.mp3");
    }
 //   AudioListener
}