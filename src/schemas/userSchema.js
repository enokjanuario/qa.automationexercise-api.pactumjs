const Joi = require('joi');

const createUserResponseSchema = Joi.object({
  responseCode: Joi.number().required(),
  message: Joi.string().required()
});

const deleteUserResponseSchema = Joi.object({
  responseCode: Joi.number().required(),
  message: Joi.string().required()
});

module.exports = {
  createUserResponseSchema,
  deleteUserResponseSchema
};