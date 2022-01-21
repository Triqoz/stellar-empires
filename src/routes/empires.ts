import express from 'express';
import controller from '../controllers/empires';
const router = express.Router();

router.get('/empire', controller.getEmpire);

export = router;