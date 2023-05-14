describe('entryevershop', () => {
  it('passes', () => {
    cy.visit('https://demo.evershop.io/')
    cy.screenshot({ capture: 'viewport', path: 'enterhomepage/enterhomepage.png' });
  })
})