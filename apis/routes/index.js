import express from 'express';
import v0_0_1 from './v0.0.1/index.js';
const router = express.Router();

router.use('/v-0.0.1', v0_0_1);

export default router;