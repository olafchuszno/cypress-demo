/// <reference types="cypress" />
/// <reference types="../support" />

interface User {
  username: string,
  email: string,
  password: string
};

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
    registerNewUser(): Promise<User>,
    
    /**
     * 
     * @param buttonText String
     */
    submitFormByButtonText(buttonText: string): Chainable<any>,
    isUserAuthenticated(userName: string): Chainable<any>,

    /**
     * Checks whether a correct error message appeared in the DOM
     * @param message String
     */
    errorMessage(message: string): Chainable<any>,

    /**
     * Logs the user in. Sends a request and puts jwtToken in localStorage
     * @param message String
     */
    login(user: User): Chainable<any>,
  }
}
