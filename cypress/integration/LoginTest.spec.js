describe('Testes do Login', ()=>{
let email = Math.random().toString(36).slice(2, 7)+"@mailinator.com";

    context('@Login', ()=> {
        it('Login com sucesso', ()=> {
            cy.visit('https://inscricoes.agilebrazil.com/users/sign_in');//Abre URL
            cy.get('[href="/users/sign_up"]').click();//clicar no link registro
            cy.get('#user_first_name').type('Testes');//Inserir o nome
            cy.get('#user_last_name').type('Agile');//Inserir o sobrenome
            cy.get('#user_email').type(email)//Inserir email
            cy.get('#user_password').type('12345678')//Inserir a senha
            cy.get('#user_password_confirmation').type('12345678')//Inserir a confirmação da senha
            cy.get('.btn').click();//Clicar no botão Registro
            cy.get('.user-avatar').click();
            for (var i=0; i<=6; i++){
                cy.get('.user-avatar').type(); 
            }
          //  cy.get('/html/body/div/div[2]/div/div/div/a[1]').should('contain', 'Minha Conta');
           })

    })

})