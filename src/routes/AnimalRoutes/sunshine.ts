import * as express from "express";

export default class AnimalRoute {
    public load(req: express.Request, res: express.Response, nex: express.NextFunction) {
        res.type("text/html");
        res.send("<img src= http://dykn.com/wp-content/uploads/2014/12/positively-smitten.jpg width=750>");
  //      res.send("yeah boi"); "); 
       // res.sendFile(__dirname + "/assets/Images/sun.jpg")
    }   
}

    //    res.type("text/html");
  //      res.send("yeah boi"); 
  //  }   
// }    

