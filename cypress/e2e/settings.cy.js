describe('Settings Page', () => {
  beforeEach(() => {
    cy.registerNewUser().then(user => {
      cy.request('POST', cy.config().apiBaseUrl + '/users/login', {
        user: {
          email: user.email,
          password: user.password
        }
      }).then(response => {
        localStorage.setItem('jwtToken', response.body.user.token);

        cy.visit(Cypress.config().settingsUrl);
      });
    });
  });
  it('should have a correct url', () => {
    cy.assertPageUrl(Cypress.config().settingsUrl);
  })

  it('should have a correct title', () => {
    cy.contains('h1', 'Your Settings');
  })

  it('should have a correct title', () => {
    cy.contains('h1', 'Your Settings');
  })

  it('should have a profile picture URL', () => {
    cy
      .getByPlaceholder('URL of profile picture')
      .invoke('val')
      .should('include', 'http');
  })

  it('should allow changing profile picture URL', () => {
    cy
      .getByPlaceholder('URL of profile picture')
      .invoke('val')
      .should('include', 'http');
  })

})