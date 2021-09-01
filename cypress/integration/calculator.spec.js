describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  // Do the number buttons update the display of the running total?
 
  it('running total should display current result', () => {
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','20')
  })

   // Do the arithmetical operations update the display with the result of the operation?
   it('operations should display current result', () => {
    cy.get('#number4').click();
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','20')
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','22')
  })
  
  // Can multiple operations be chained together?
  it('multiple operations chain together', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','32')
  })

  // Is the output as expected for a range of numbers?
  it('test different numbers', () => {
    cy.get('#number4').click();
    cy.get('#operator-divide').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','0.5')

    cy.get('#operator-subtract').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','-0.5')

    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#number6').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','-493')
  })

  // Does divide by 0 return 0?
  it('8 divided by 0 should error', () => {
    cy.get('#number8').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain','Undefined')
  })
  //    unmodified, calculator displays infinity, not 0
  //    result should be 'undefined'
  //    changed calculator.js to return 'undefined' if you divide by zero

})