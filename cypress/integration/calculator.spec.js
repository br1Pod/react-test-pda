describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  // Do the number buttons update the display of the running total?
  it('running total should display result of a sum', () => {
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','20')
  })

  // Do the arithmetical operations update the display with the result of the operation?
  
  // Can multiple operations be chained together?
  // Is the output as expected for a range of numbers?
  // Does divide by 0 return 0?





})