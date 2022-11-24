import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import { create } from 'express-handlebars';
import viewsRouter from './views/routes/index.js';
import apisRouter from './apis/routes/index.js';


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use('/public', express.static(__dirname + '/public'));

app.use(bodyParser.json());
bodyParser.urlencoded({extended: true});


app.use('/api', apisRouter);

const hbs = create({
    helpers: {
        getDomain() { return process.env.DOMAIN },
        getSlogan() { return process.env.SLOGAN}
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(viewsRouter);

export default app;