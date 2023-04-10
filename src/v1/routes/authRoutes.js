import express from 'express';
import authController from '../../controllers/authController.js';

const router = express.Router();

router
    .post("/signIn", authController.signIn);

export default router;