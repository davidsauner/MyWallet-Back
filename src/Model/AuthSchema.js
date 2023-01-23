import joi from 'joi';

export const authUser = joi.object({
    name: joi.string().required().min(3),
    email: joi.string().required().min(10),
    password: joi.string().required().min(3),
    
})