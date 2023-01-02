import 'dotenv/config';
import 'module-alias/register';
import validateEnv from './validateEnv';
import App from './app';
import NewsController from './controller'
import YoutubeAPIController from './youtubeController'

validateEnv();

const app = new App(
    [
       new NewsController(),
       new YoutubeAPIController()
    ],
    Number(process.env.PORT)
);

app.listen();
