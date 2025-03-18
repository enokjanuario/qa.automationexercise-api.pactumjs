const pactum = require('pactum');
const config = require('../config/config');
const Joi = require('joi');

pactum.request.setBaseUrl(config.baseUrl);

pactum.handler.addExpectHandler('validateJoiSchema', (ctx, schema) => {
  if (!schema || typeof schema.validate !== 'function') {
    throw new Error('Invalid Joi schema provided');
  }

  const { error } = schema.validate(ctx.res.json);
  if (error) {
    throw new Error(`Schema validation failed: ${error.message}`);
  }
  return true;
});

const logRequestResponse = (spec) => {
  spec.toss();
  console.log('Request:', spec.request);
  console.log('Response:', spec.response);
  return spec;
};

module.exports = {
  pactum,
  logRequestResponse
};