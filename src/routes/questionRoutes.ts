import { PrismaClient } from '@prisma/client';
import express from 'express';
import { QuestionSchema } from '../zodSchema/schemas';

const questionRouter = express.Router();

questionRouter.post('/create', async (req, res) => {
    const body = req.body; 
    const prisma = new PrismaClient();

    const parsedBody = QuestionSchema.safeParse(body);

    if (!parsedBody.success) { return res.status(400).json({error: parsedBody.error}); }
    try {
        const question = await prisma.questions.create({
            data: parsedBody.data,
        });
        console.log(`Question added: ${question.question}`);

        res.status(200).json({message: 'Question created successfully', question});
    }catch(error){
        console.error(error);
        res.status(500).json({error: 'An error occurred while creating the question.'});
    }finally{
        await prisma.$disconnect();
    }

});

export default questionRouter;