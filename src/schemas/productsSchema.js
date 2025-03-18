const Joi = require('joi');

const productsSchema = Joi.object({
  responseCode: Joi.number().required(),
  products: Joi.array().items(
    Joi.object({
      id: Joi.number().required(),
      name: Joi.string().required(),
      price: Joi.string().required(),
      brand: Joi.string().required(),
      category: Joi.object({
        usertype: Joi.object({
          usertype: Joi.string().required()
        }).required(),
        category: Joi.string().required()
      }).required()
    })
  ).required()
});

module.exports = productsSchema;