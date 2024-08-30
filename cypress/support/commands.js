// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { generateUser } from "./generateUser";

Cypress.Commands.add('getByPlaceholder', (placeholder) => {
  cy.get(`[placeholder="${placeholder}"]`);
})

Cypress.Commands.add('assertPageUrl', (url) => {
  cy
    .url()
    .should('equal', url);
})

Cypress.Commands.add('registerNewUser', () => {
  const user = generateUser();

  cy.request('POST', 'https://api.realworld.io/api/users', {
    user,
  });

  return cy.wrap(user);
})

Cypress.Commands.add('submitFormByButtonText', (buttonText) => {
  cy
    .contains('.btn', buttonText)
    .click();
});

Cypress.Commands.add('isUserAuthenticated', (username) => {
  cy
    .contains('.nav-link', username)
    .should('exist')
})

Cypress.Commands.add('errorMessage', (message) => {
  cy
    .contains('.error-messages', message)
    .should('exist')
})