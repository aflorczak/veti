import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { create } from 'express-handlebars';
import viewsRouter from './views/routes/index.js';

const app = express();

// RestAPI routes here


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