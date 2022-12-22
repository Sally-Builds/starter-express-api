import fs from 'fs'
import express, { Application, NextFunction, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';
import Controller from './utils/Controller.interface'
import ErrorMiddleware from './utils/error.middleware';
import HttpException from './utils/httpExceptions';

class App {
    public port: number;
    public app: Application;

    constructor(controllers: Controller[], port: number) {
        this.port = port;
        this.app = express();
        this.initializeMiddleware();
        this.initializeControllers(controllers);
        this.initializeErrorHandler();
    }

    private initializeMiddleware() {
        this.app.use(cors());
        this.app.use(compression());
        this.app.use(morgan('dev'));
        this.app.use(cookieParser());
        this.app.use(express.json());


        this.app.use(express.urlencoded({ extended: true }));
    }

    private initializeControllers(controllers: Controller[]) {
        this.app.get("/", (req, res) => {
            res.send("Welcome to news web scrapping App!")
          })
        controllers.map((controller: Controller) => {
            this.app.use('/api', controller.router);
        });
        this.app.all('*', (req: Request, res:Response, next:NextFunction) => {
        next(new HttpException(`Can't find ${req.originalUrl} on this server`, 404));
          })
    }

    private initializeErrorHandler() {
        this.app.use(ErrorMiddleware);
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Application running on port ${this.port}`);
        });
    }
}

export default App;
