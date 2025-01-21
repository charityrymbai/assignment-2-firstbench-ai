import express from 'express';
import mockTestRouter from './routes/mocktestRoutes';
import questionRouter from './routes/questionRoutes';
import userRouter from './routes/userRouter';

const app = express();

app.use(express.json());

app.use('/api/v1/mocktest', mockTestRouter);
app.use('/api/v1/questions', questionRouter);
app.use('/api/v1/user', userRouter);

app.listen(3000);