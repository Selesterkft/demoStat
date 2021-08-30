import express from 'express';
const cors = require('cors');
import { heartbeat } from '../controllers';

const router = express.Router();

router.use(cors());

router.use(express.json());

router.get('/heartbeat', heartbeat);

export default router;
