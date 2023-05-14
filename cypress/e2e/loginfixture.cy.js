describe('Login', () => { 

    it('Should Login With Fixture', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.fixture('userlogin').then((data) => {
            
            data.forEach((userdata) => {
                cy.get('a[href="/account/login"] svg').click();
                cy.get('input[placeholder="Email"]').type(userdata.email);
                cy.get('input[placeholder="Password"]').type(userdata.password);
                cy.wait(1000)
                cy.get('button[type="submit"]').click();     

                if(userdata.email == 'Niken6@test.com')
                {
                    cy.get('a[href="/account"] svg').click();
                    cy.contains('Niken6@test.com').should('exist');
                    cy.contains('Logout').click();
                }
                else 
                if(userdata.email == 'Niken10@test.com')
                {
                    cy.get('div.text-critical.mb-1').should('exist');      
                }
            });
           
        })
    });


 })