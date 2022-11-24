import express from 'express';
const router = express.Router();

router.get('/', (req,res) => {
    res.render('pages/register/views/index', {
        msg: 'Panel rejestracji',
        title: "Zarejestruj się"
    });
});

export default router;