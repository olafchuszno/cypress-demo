/// <reference types="cypress" />
/// <reference types="../support" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Gets an element by it's placeholder attribute value
     * @param placeholder String
     */
    getByPlaceholder(placeholder: string): Chainable<any>,

    /**
     * Asserts whether the current URL matches the actual one
     * @param expectedURL String
     */
    assertPageUrl(expectedURL: string): Chainable<any>,

    /**
     * Registers a new User and returns the User wrapped in a promise
     */
    registerNewUser(): Promise<{ username: string, email: string, password: string }>,
    
    /**
     * 
     * @param buttonText String
     */
    submitFormByButtonText(buttonText: string): Chainable<any>,
    isUserAuthenticated(userName: string): Chainable<any>,
    errorMessage(message: string): Chainable<any>,
  }
}
