import Joi from "joi";

export const updateInfosSchema = Joi.object({
  picture: Joi.string()
    .allow(null)
    .regex(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/)
    .optional(),
  occupation: Joi.string().allow(null).max(30).optional(),
  aboutMe: Joi.string().allow(null).optional(),
});
