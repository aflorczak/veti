import express from 'express';
const router = express.Router();

router.get('/', (req,res) => {
    res.render('pages/login/views/index', {
        msg: 'Panel logowania',
        title: "Zaloguj się"
    });
});

export default router;