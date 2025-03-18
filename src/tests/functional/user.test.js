const { pactum } = require('../../helpers/utils');
const { endpoints } = require('../../config/config');
const { validUser, getRandomEmail } = require('../../data/userData');
const { expect } = require('chai');

describe('Functional Tests - User API', () => {
  let userEmail;

  beforeEach(() => {
    userEmail = getRandomEmail();
  });

  it('API 11: Should create a new user account', async () => {
    const userData = { ...validUser, email: userEmail };

    const response = await pactum
      .spec()
      .post(endpoints.createUser)
      .withForm(userData)
      .expectStatus(200)
      .toss();

    expect(response.json.responseCode).to.equal(201);
    expect(response.json.message).to.equal('User created!');
  });

  it('API 11: Should not create a user with existing email', async () => {
    const userData = { ...validUser, email: userEmail };

    await pactum
      .spec()
      .post(endpoints.createUser)
      .withForm(userData)
      .expectStatus(200)
      .toss();

    const response = await pactum
      .spec()
      .post(endpoints.createUser)
      .withForm(userData)
      .expectStatus(200)
      .toss();

    expect(response.json.responseCode).to.equal(400);
    expect(response.json.message).to.equal('Email already exists!');
  });

  it('API 12: Should delete an existing user account', async () => {
    const userData = { ...validUser, email: userEmail };

    await pactum
      .spec()
      .post(endpoints.createUser)
      .withForm(userData)
      .expectStatus(200)
      .toss();

    const response = await pactum
      .spec()
      .delete(endpoints.deleteUser)
      .withForm({ email: userEmail, password: userData.password })
      .expectStatus(200)
      .toss();

    expect(response.json.responseCode).to.equal(200);
    expect(response.json.message).to.equal('Account deleted!');
  });

  it('API 12: Should not delete a non-existing user account', async () => {
    const nonExistingEmail = 'nonexisting@example.com';

    const response = await pactum
      .spec()
      .delete(endpoints.deleteUser)
      .withForm({ email: nonExistingEmail, password: 'password123' })
      .expectStatus(200)
      .toss();

    expect(response.json.responseCode).to.equal(404);
    expect(response.json.message).to.equal('Account not found!');
  });
});