import express from 'express';
const router = express.Router();

router.get('/', (req,res) => {
    res.render('pages/home/views/index', {
        msg: 'Hello Veti',
        title: "Hello Veti",
        styles: "/public/home/main.css",
        scripts: "/public/home/main.js"
    });
});

export default router;