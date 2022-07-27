import express, { Application } from 'express';
import logger from 'morgan';
import appConfig from '../configs/appConfig';
import { RouteCongig } from '../configs/routeConfig';
import errorMiddleware from '../middlewares/errorHandler.middlewares';
import path from 'path';

export class Server {
  private app = express();
  private middleware = [
    logger('dev'), // common, dev,
    express.urlencoded({ extended: true }),
    express.json(),
    express.static(path.join(path.resolve(), 'public')),
  ];
  private routerConfig = new RouteCongig();

  private initializeStatic() {
    this.middleware.forEach((m) => {
      this.app.use(m);
    });
    this.app.get('/check-server', (req, res) => res.json({ success: true }));
  }

  private initializeApiRouters() {
    this.routerConfig.init(this.app);
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }

  start() {
    this.initializeStatic();
    this.initializeApiRouters();
    this.initializeErrorHandling();
    this.app.listen(appConfig.env.port, () => console.log(`Server started on port: ${appConfig.env.port}`));
  }
}
