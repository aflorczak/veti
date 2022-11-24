import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { create } from 'express-handlebars';

const app = express();
const hbs = create({
    helpers: {
        getDomain() { return process.env.DOMAIN },
        getSlogan() { return process.env.SLOGAN}
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req,res) => {
    res.render('pages/home/index', {
        msg: 'Hello Veti',
        title: "Hello Veti"
    });
});

export default app;