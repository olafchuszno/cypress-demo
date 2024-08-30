describe('Sign In page', () => {
  beforeEach(() => {
    cy.visit('https://react-recoil-realworld.vercel.app/#/login');
  });

  it('should contain main parts', () => {
    cy
      .contains('h1', 'Sign in')
      .should('exist')
  })

  it('should have a correct title', () => {
    cy
      .contains('h1', 'Sign in')
      .should('exist')
  });
  it('should require an email', () => {
    cy.getByPlaceholder('Password').type('Test123');

    cy.submitFormByButtonText('Sign in');

    cy.contains('.error-messages > li', "email can't be blank")
      .should('exist');
  });
  it('should require a password', () => {
    cy.getByPlaceholder('Email').type('example@email.com');

    cy.submitFormByButtonText('Sign in');

    cy.contains('.error-messages > li', "password can'be blank")
      .should('exist');
  });

  it('should show an error for a wrong email', () => {
    cy.getByPlaceholder('Password').type('Test123');

    cy.getByPlaceholder('Email').type('example');

    cy.submitFormByButtonText('Sign in');

    cy.assertPageUrl(Cypress.config().loginUrl);
  });

  it('should show an error for a wrong password', () => { });

  it('should allow a user to log in', () => {
    cy.registerNewUser().then(user => {
      const { username, email, password } = user;

      cy.visit(Cypress.config().loginUrl);

      cy
        .getByPlaceholder("Email")
        .type(email);

      cy
        .getByPlaceholder("Password")
        .type(password);
      
      cy.submitFormByButtonText('Sign in')
      
      cy.assertPageUrl(Cypress.config().baseUrl);

      cy
        .contains('.nav-link', username)
        .should('exist')
    });
  });

  it('should allow a user to log in pressing enter key', () => {
    cy.registerNewUser().then(user => {
      const { username, email, password } = user;

      cy.visit(Cypress.config().loginUrl);

      cy
        .getByPlaceholder("Email")
        .type(email);

      cy
        .getByPlaceholder("Password")
        .type(password + '{enter}');
      
      cy.assertPageUrl(Cypress.config().baseUrl);

      cy.isUserAuthenticated(username)
    });
  });
})