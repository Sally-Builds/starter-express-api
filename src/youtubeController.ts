import express, {Router, Request, Response, NextFunction} from 'express'
import Controller from './utils/Controller.interface'
import HttpException from './utils/httpExceptions'
import YoutubeAPI from './usecases/youtubeAPI'


class YoutubeAPIController {
    public path = '/tv'
    public router = Router()
    private factory = new YoutubeAPI((process.env.YOUTUBE_API_KEY as string), (process.env.CHANNEL_ID as string))



    constructor() {
        this.initializeRouter()
    }

    public initializeRouter = () => {
        

        
        this.router.get(`${this.path}/`, this.getAll)

    }

    private getAll = async (req: Request, res:Response, next:NextFunction): Promise<Response | void> => {
        try {

            const result = await this.factory.getVideos()

            res.status(201).json({
                data: result,
                total: result.length
            })
        } catch (error:any) {
         next(new HttpException(error.message, error.statusCode))
        }
    }
}

export default YoutubeAPIController