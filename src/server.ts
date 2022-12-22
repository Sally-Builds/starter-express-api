import 'dotenv/config';
import 'module-alias/register';
import validateEnv from './validateEnv';
import App from './app';
import NewsController from './controller'

validateEnv();

const app = new App(
    [
       new NewsController()
    ],
    Number(process.env.PORT)
);

app.listen();
