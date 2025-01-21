import { PrismaClient } from '@prisma/client';
import express from 'express';

const mockTestRouter = express.Router();


mockTestRouter.post('/create', async (req, res) => {
    const { userId } = req.body;
    const prisma = new PrismaClient();
    const QUESTIONS_PER_TEST = 5;

    try {
        const attemptedMockTests = await prisma.mockTest.findMany({
            where: {
                userId,
            },
            select: {
                questionId: true,
            },
        });

        const attemptedQuestionIds = attemptedMockTests.flatMap((test) => test.questionId);

        const allQuestions = await prisma.questions.findMany({
            select: { id: true },
        });
        const allQuestionIds = allQuestions.map((q) => q.id);

        const newQuestionIds = allQuestionIds.filter((id) => !attemptedQuestionIds.includes(id));

        if (newQuestionIds.length === 0) {
            return res.status(400).json({ message: 'No new questions available for this user.' });
        }

        const limitedQuestionIds = newQuestionIds.slice(0, QUESTIONS_PER_TEST);

        const questions = await prisma.questions.findMany({
            where: {
                id: {
                    in: limitedQuestionIds,
                },
            },
        });

        const mockTest = await prisma.mockTest.create({
            data: {
                userId,
                questionId: limitedQuestionIds,
            },
        });

        res.status(200).json({message: "Mocktest created successfully", mockTest, questions});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the mock test.' });
    } finally {
        await prisma.$disconnect();
    }
});

export default mockTestRouter;
