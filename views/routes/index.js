import express from 'express';
import homeRouter from './../pages/homePage/routes/index.js';
const router = express.Router();

router.use('/', homeRouter);

export default router;