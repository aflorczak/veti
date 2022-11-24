import express from 'express';
const router = express.Router();
import userRouter from './users/index.js';

router.use('/users', userRouter);


export default router;