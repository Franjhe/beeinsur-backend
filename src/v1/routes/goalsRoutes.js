import express from 'express';
import authenticate from '../../middlewares/authenticate.js'
import goalsController from '../../controllers/goalsController.js';

const router = express.Router();

router
    .get    ("/goals"       , goalsController.getGoals)
    .get    ("/goals:id"    , authenticate, goalsController.getGoals)
    .post   ("/goals"       , authenticate, goalsController.getGoals)
    .put    ("/goals:id"    , authenticate, goalsController.getGoals)
    .delete ("/goals:id"    , authenticate, goalsController.getGoals)

export default router;