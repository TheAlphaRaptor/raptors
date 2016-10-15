import * as express from "express";
import IndexRoute from "../routes";
import AnimalRoute from"../routes/AnimalRoutes/AnimalRoute";
import sunshine from"../routes/AnimalRoutes/sunshine"
import rain from"../routes/AnimalRoutes/rain"
import extreme from"../routes/AnimalRoutes/extreme"

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
                router.get("/sunshine", new sunshine().load);
                router.get("/rain", new rain().load);
                router.get("/extreme", new extreme().load);
                this.app.use(router);
        }
 
start(){
  this.app.use(express.static(__dirname + '/public'));
  this.app.listen(8000)
}



}