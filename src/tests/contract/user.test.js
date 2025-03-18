const { pactum } = require('../../helpers/utils');
const { endpoints } = require('../../config/config');
const { validUser } = require('../../data/userData');
const { expect } = require('chai');

describe('Contract Tests - User API', () => {
  let email;

  before(() => {
    email = validUser.email;
    return pactum
      .spec()
      .post(endpoints.createUser)
      .withForm(validUser)
      .expectStatus(200)
      .toss();
  });

  it('API 12: Should delete user account with status code 200', async () => {
    const response = await pactum
      .spec()
      .delete(endpoints.deleteUser)
      .withForm({ email, password: validUser.password })
      .expectStatus(200)
      .toss();

    expect(response.json.responseCode).to.equal(200);
  });
});