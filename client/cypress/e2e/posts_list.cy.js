describe('Posts List E2E Test', () => {
  beforeEach(() => {
    // Seed the database with test data before each test
    cy.request('POST', 'http://localhost:5000/api/posts', {
      title: 'Cypress Test Post',
      content: 'This is a post created during Cypress E2E test.',
      author: 'Cypress Tester',
    });
    cy.visit('/'); // Visit the client application
  });

  it('should display posts fetched from the API', () => {
    cy.contains('h2', 'Cypress Test Post').should('be.visible');
    cy.contains('p', 'This is a post created during Cypress E2E test.').should('be.visible');
    cy.contains('em', 'By: Cypress Tester').should('be.visible');
  });

  it('should display "No posts available." if no posts are returned', () => {
    // Clear the database and visit again
    cy.request('DELETE', 'http://localhost:5000/api/posts/clear'); // Assuming you'll add this endpoint
    cy.visit('/');
    cy.contains('No posts available.').should('be.visible');
  });
}); 