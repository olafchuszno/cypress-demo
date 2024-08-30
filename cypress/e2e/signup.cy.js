import { faker } from "@faker-js/faker";

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit(Cypress.config().registerUrl);
  });

  it('should have a correct title', () => {
    cy
      .contains('h1', 'Sign up')
      .should('exist')
  });

  it('should require a username', () => {
    cy
      .getByPlaceholder("Email")
      .type(faker.internet.email());

    cy
      .getByPlaceholder("Password")
      .type('password123');

    cy.submitFormByButtonText('Sign up');

    cy.errorMessage("username can't be blank");

    cy.assertPageUrl(Cypress.config().registerUrl);
  });

  it('should require an email', () => {
    cy
      .getByPlaceholder("Username")
      .type(faker.internet.userName());

    cy
      .getByPlaceholder("Password")
      .type('password123');
    
    cy.submitFormByButtonText('Sign up');

    cy.errorMessage("email can't be blank");

    cy.assertPageUrl(Cypress.config().registerUrl);
  });

  it('should require a password', () => {
    cy
      .getByPlaceholder("Username")
      .type(faker.internet.userName());

    cy
      .getByPlaceholder("Email")
      .type(faker.internet.email());
    
    cy.submitFormByButtonText('Sign up');

    cy.errorMessage("password can't be blank");

    cy.assertPageUrl(Cypress.config().registerUrl);
  });

  it('should require a unique email', () => {
    cy.assertPageUrl(Cypress.config().registerUrl);

    cy.registerNewUser().then(user => {
      const { username, email, password } = user;

      cy
        .getByPlaceholder("Username")
        .type(username + "abc");

      cy
        .getByPlaceholder("Email")
        .type(email);

      cy
        .getByPlaceholder("Password")
        .type(password);

      cy
        .contains('.btn', 'Sign up')
        .click();

      cy
        .url()
        .should('equal', Cypress.config().registerUrl)

      cy.errorMessage('email has already been taken')
    });
  });

  it('should require a unique username', () => {
    cy.assertPageUrl(Cypress.config().registerUrl);

    cy.registerNewUser().then(user => {
      const { username, email, password } = user;

      cy
        .getByPlaceholder("Username")
        .type(username);

      cy
        .getByPlaceholder("Email")
        .type(email + "abc");

      cy
        .getByPlaceholder("Password")
        .type(password);

      cy
        .contains('.btn', 'Sign up')
        .click();

      cy
        .url()
        .should('equal', Cypress.config().registerUrl)

      cy.errorMessage('username has already been taken')
    });
  });

  it('should register a new user', () => {
    const randomNumber = Math.random().toString().slice(2);

    cy.getByPlaceholder("Username").type(faker.internet.userName() + randomNumber);
    cy.getByPlaceholder("Email").type(faker.internet.email() + randomNumber);
    cy.getByPlaceholder("Password").type(faker.internet.password());

    cy.submitFormByButtonText('Sign up');

    cy.assertPageUrl(Cypress.config().baseUrl)
  });

  it('should register a new user pressing enter', () => {
    const randomNumber = Math.random().toString().slice(2);

    cy.getByPlaceholder("Username").type(faker.internet.userName() + randomNumber);
    cy.getByPlaceholder("Email").type(faker.internet.email() + randomNumber);
    cy.getByPlaceholder("Password").type(faker.internet.password() + '{enter}');

    cy.assertPageUrl(Cypress.config().baseUrl)
  });
});
