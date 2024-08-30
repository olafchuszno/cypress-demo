/// <reference types="Cypress" />

describe('home_page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have a correct title', () => {
    cy
      .get('h1.logo-font')
      .should('contain.text', 'conduit');
  });

  it('should have a global feed section button', () => {
    cy
      .contains('a', 'Global Feed')
      .should('exist');
  });

  it('should have Popular Tags', () => {
    cy
      .contains('.sidebar p', 'Popular Tags')
      .should('exist');
  });

  it('should open Sign In page', () => {
    cy.visit('/');

    cy.contains('Sign in')
      .should('have.attr', 'href', "#/login")
      .click();

    cy.assertPageUrl(Cypress.config().loginUrl);

    cy
      .get('h1.text-xs-center')
      .should('contain.text', 'Sign in');
  });

  it('should open Sign Up page', () => {
    cy.visit('/');

    cy.contains('Sign up')
      .should('have.attr', 'href', "#/register")
      .click();

    cy.assertPageUrl(Cypress.config().registerUrl);

    cy
      .get('h1.text-xs-center')
      .should('contain.text', 'Sign up');
    });
})