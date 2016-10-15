import * as express from "express";
import IndexRoute from "../routes";
import AnimalRoute from"../routes/AnimalRoutes/AnimalRoute";
import AnimalCat from"../routes/AnimalRoutes/AnimalCat"
import AnimalDog from"../routes/AnimalRoutes/rain"
import AnimalBird from"../routes/AnimalRoutes/extreme"

export default class Server {
        public app: express.Application

        constructor() {
                this.app = express();
                this.routes();
        }

        private routes() {
                const router = express.Router();
                router.get("/", new IndexRoute().load);
                router.get("/animal", new AnimalRoute().load);
                router.get("/cat", new AnimalCat().load);
                router.get("/rain", new AnimalDog().load);
                router.get("/extreme", new AnimalBird().load);
                this.app.use(router);
        }
 
start(){
  this.app.use(express.static(__dirname + '/public'));
  this.app.listen(8000)
}



}