import Joi from "joi";

export const repositoryInfosSchema = Joi.object({
  repositoryName: Joi.string().required(),
  description: Joi.string().required(),
  url: Joi.string().uri().required(),
});
