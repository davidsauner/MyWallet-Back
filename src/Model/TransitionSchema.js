import joi from 'joi';

export const authTransition = joi.object({
    user: joi.string().required().min(3),
    value: joi.number().required(),
    description: joi.string().required().min(1)
})