/// <reference types="cypress"/>

describe('Suite de testes de formulario', () =>{
   context('@Formulario', () => {
       it('Preencher formulario 1 com sucesso', () =>{
        cy.visit('https://ultimateqa.com/filling-out-forms/');//digitar a url
        cy.get('#et_pb_contact_name_0').click({force: true});//clicar no campo nome 1
        cy.get('#et_pb_contact_name_0').type('Joyce Cypress');//escrever no campo nome 1
        cy.get('#et_pb_contact_message_0').click();//clicar no campo mensagem 1
        cy.get('#et_pb_contact_message_0').type('Estou escrevendo usando o cypress');//escrever no campo mensagem 1
        cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_submit').click();//clicar no botão subimit
        cy.get('.et-pb-contact-message > p').should('contain', 'Thanks for contacting us');//assert da mensagem de sucesso
       })
   })
})