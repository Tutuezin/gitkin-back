import { empty } from "@prisma/client/runtime";
import Joi from "joi";

export const updateInfosSchema = Joi.object({
  name: Joi.string().max(25).optional(),
  picture: Joi.string()
    .allow("")
    .allow(null)
    .regex(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/)
    .optional(),
  occupation: Joi.string().allow("").allow(null).max(30).optional(),
  aboutMe: Joi.string().allow("").allow(null).optional(),
});

export const updateSocialsSchema = Joi.object({
  location: Joi.string().allow("").allow(null).optional(),
  work: Joi.string().allow("").allow(null).optional(),
  github: Joi.string().allow("").allow(null).optional(),
  linkedin: Joi.string().allow("").allow(null).optional(),
  twitter: Joi.string().allow("").allow(null).optional(),
  website: Joi.string().allow("").allow(null).optional(),
  email: Joi.string().allow("").allow(null).optional(),
});
