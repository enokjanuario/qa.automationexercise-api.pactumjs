const getRandomEmail = () => {
  return `test_${Math.floor(Math.random() * 100000)}@example.com`;
};

module.exports = {
  validUser: {
    name: 'Test User',
    email: getRandomEmail(),
    password: 'Password123',
    title: 'Mr',
    birth_date: '10',
    birth_month: '5',
    birth_year: '1990',
    firstname: 'Test',
    lastname: 'User',
    company: 'Test Company',
    address1: 'Test Address 1',
    address2: 'Test Address 2',
    country: 'United States',
    zipcode: '12345',
    state: 'Test State',
    city: 'Test City',
    mobile_number: '1234567890'
  },
  getRandomEmail
};