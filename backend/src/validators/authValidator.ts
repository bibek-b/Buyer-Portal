import Joi from "joi"

export const registerSchema = Joi.object({
    name: Joi.string().max(20).trim().required(),
    email: Joi.string().email().trim().required(),
    password: Joi.string().min(6).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        "any.only": "Passwords do not match"
    }),
});

export const loginSchema = Joi.object({
    email: Joi.string().email().trim().required(),
    password: Joi.string().min(6).required(),
})