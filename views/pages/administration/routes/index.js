import express from 'express';
const router = express.Router();

router.get('/', (req,res) => {
    res.render('pages/administration/views/index', {
        msg: 'Aplikacja administracyjna',
        title: "Administracja"
    });
});

export default router;