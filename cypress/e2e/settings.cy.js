describe('Settings Page', () => {
  beforeEach(() => {
    cy.registerNewUser().then(user => {
      cy.login(user)
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
  });

});
