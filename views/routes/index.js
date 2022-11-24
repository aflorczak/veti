import express from 'express';
import homeRouter from './../pages/home/routes/index.js';
import registerRouter from './../pages/register/routes/index.js';
import loginRouter from './../pages/login/routes/index.js';
import accountRouter from './../pages/account/routes/index.js';
import administrationRouter from './../pages/administration/routes/index.js';
import vetsWebsiteRouter from './../pages/website/routes/index.js';
const router = express.Router();

router.use('/rejestracja', registerRouter);
router.use('/logowanie', loginRouter);
router.use('/konto', accountRouter);
router.use('/administracja', administrationRouter);
router.use(vetsWebsiteRouter);
router.use('/', homeRouter);

export default router;