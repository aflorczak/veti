import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import { create } from 'express-handlebars';
import viewsRouter from './views/routes/index.js';
import apisRouter from './apis/routes/index.js';


const app = express();

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