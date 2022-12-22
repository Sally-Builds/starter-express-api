import express, {Router, Request, Response, NextFunction} from 'express'
import Controller from './utils/Controller.interface'
import HttpException from './utils/httpExceptions'
import Factory from './index'

/**
 * import other schema controllers
 */


class NewsController implements Controller {
    public path = '/news'
    public router = Router()
    private factory = new Factory()



    constructor() {
        this.initializeRouter()
    }

    public initializeRouter = () => {
        

        
        this.router.get(`${this.path}/`, this.getAll)
        this.router.post(`${this.path}/`, this.getOne)

    }

    private getAll = async (req: Request, res:Response, next:NextFunction): Promise<Response | void> => {
        try {

            console.log(req.query)
            const result = await this.factory.getAll(Number(req.query.page) || 1)

            res.status(201).json({
                data: result,
            })
        } catch (error:any) {
         next(new HttpException(error.message, error.statusCode))
        }
    }

    private getOne = async (req: Request, res:Response, next:NextFunction): Promise<Response | void> => {
        try {

            console.log(req.query.find)
            const result = await this.factory.getOne(req.query.find)

            res.status(201).json({
                data: result,
            })
        } catch (error:any) {
         next(new HttpException(error.message, error.statusCode))
        }
    }
}

export default NewsController