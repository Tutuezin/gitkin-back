import Joi from "joi";

export const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().max(25).required(),
  userName: Joi.string().max(25).required(),
  password: Joi.string().required(),
});

export const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
