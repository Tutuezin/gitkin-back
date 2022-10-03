import Joi from "joi";

export const signUpSchema = Joi.object({
  email: Joi.string().email().required(),
  userName: Joi.string().max(20).required(),
  password: Joi.string().required(),
});