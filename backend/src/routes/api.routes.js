import express from 'express';
const cors = require('cors');
import { heartbeat, login } from '../controllers';
import { verifyLocalSystem } from '../middlewares/verifyLocalSystem';

const router = express.Router();

router.use(cors());

router.use(express.json());

router.get('/heartbeat', heartbeat);

router.use(verifyLocalSystem);

router.post('/login', login);

export default router;
