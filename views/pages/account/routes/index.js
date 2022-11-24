import express from 'express';
const router = express.Router();

router.get('/', (req,res) => {
    res.render('pages/account/views/index', {
        msg: 'Panel aktualnie zalogowanego użytkownika',
        title: "Ustawienia dla zalogowany"
    });
});

export default router;