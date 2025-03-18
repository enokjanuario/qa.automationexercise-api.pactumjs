const { pactum } = require('../../helpers/utils');
const { endpoints } = require('../../config/config');
const { expect } = require('chai');

describe('Contract Tests - Products API', () => {
  it('API 1: Should get all products list with status code 200', async () => {
    const response = await pactum
      .spec()
      .get(endpoints.allProducts)
      .expectStatus(200)
      .toss();

    expect(response.json.responseCode).to.equal(200);
  });
});