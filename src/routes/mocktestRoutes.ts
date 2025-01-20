import { PrismaClient } from '@prisma/client';
import express from 'express';

const mockTestRouter = express.Router();

mockTestRouter.get('/health', (req, res) => {
    res.json({message: 'Mock Test Service is up and running'});
});




export default mockTestRouter;