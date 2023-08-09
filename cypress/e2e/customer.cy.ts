

describe('Login to Contact Page', () => {

  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
    cy.typeLogin(Cypress.env('Email'),Cypress.env('Password'))

  
  });

  it('Contact',() => {
    cy.visit('/')
})

})