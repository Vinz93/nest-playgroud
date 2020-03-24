import * as Joi from '@hapi/joi';

export const createCatSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),
  age: Joi.number().required(),
  breed: Joi.string(),
});
