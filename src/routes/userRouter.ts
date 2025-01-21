import express from 'express';
import { UserSchema } from '../zodSchema/schemas';
import { PrismaClient } from '@prisma/client';

const userRouter = express.Router();

userRouter.post('/create', async (req, res) => {
    const body = req.body; 
    const parsedBody = UserSchema.safeParse(body);

    if (!parsedBody.success) { return res.status(400).send(parsedBody.error.errors); }

    const prisma = new PrismaClient();

    try {
        const user = await prisma.user.create({
            data: parsedBody.data
        });

        return res.status(200).json({message: 'User created', user});
    }catch(error){
        console.error(error);
        return res.status(500).send('Internal server error');
    }finally{
        await prisma.$disconnect();
    }
});

export default userRouter;