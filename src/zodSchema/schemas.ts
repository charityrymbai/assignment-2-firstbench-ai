import zod from 'zod';

export const QuestionSchema = zod.object({
    question: zod.string(),
    options: zod.array(zod.string()),
    answerIndex: zod.number().min(0).max(3),
});

export const UserSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    password: zod.string().min(8),
})