describe('On LinkedIn', () => {


    it('I can login', () => {
        cy.visit('https://linkedin.com');
        cy.get('.nav__button-secondary').click();
        cy.get('#username').type('simona.cantoriu@yahoo.com');
        cy.get('#password').type('ailuianomis6');
        

    })








})