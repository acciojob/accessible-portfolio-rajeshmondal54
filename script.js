//your code here
describe('Accessibility Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should have correct ARIA roles', () => {
    cy.get('h1').should('have.attr', 'role', 'heading');

    cy.get('nav').should('have.attr', 'role', 'navigation');
    cy.get('nav ul').should('have.attr', 'role', 'list');

    cy.get('li').each(($li) => {
      cy.wrap($li).should('have.attr', 'role', 'listitem');
    });

    cy.get('img').should('have.attr', 'role', 'img');
  });
});
