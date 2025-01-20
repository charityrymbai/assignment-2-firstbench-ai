import express from 'express';
import mockTestRouter from './routes/mocktestRoutes';

const app = express();

app.use(express.json());

app.use('/api/v1/mocktest', mockTestRouter);

app.listen(3000);