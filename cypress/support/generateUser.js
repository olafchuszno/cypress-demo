import { faker } from '@faker-js/faker';

export const generateUser = () => {
  const randomNumber = Math.random().toString().slice(2, 6);
  let username = faker.internet.userName() + "_" + randomNumber;
  let email = `${username}@email.com`;
  let password = `Test1234`;

  return {username, email, password}
}