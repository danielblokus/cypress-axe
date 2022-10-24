describe('to-do app', () => {
  it('should log a11y issues', () => {
    cy.visit('https://todomvc.com/examples/react')
    cy.injectAxe()
    cy.checkA11y()
  })
})