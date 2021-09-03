import express from 'express';
const cors = require('cors');
import { heartbeat, login } from '../controllers';
import { verifyToken } from '../middlewares/verifyToken';

const router = express.Router();

router.use(cors());
router.use(express.json());
router.use(verifyToken);

router.get('/reccs', login);

export default router;
