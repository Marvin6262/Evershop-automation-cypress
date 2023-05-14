describe('Login', () => { 

    it('Should Be Normal Login', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.get('a[href="/account/login"] svg').click();
        cy.get('input[placeholder="Email"]').type('Niken6@test.com');
        cy.get('input[placeholder="Password"]').type('Password1');
        cy.get('button[type="submit"]').click();
        cy.get('a[href="/account"] svg').click();
        cy.contains('Niken6@test.com').should('exist');
    
    });

    it('Login With False Password', () => {

        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.get('a[href="/account/login"] svg').click();
        cy.get('input[placeholder="Email"]').type('Niken6@test.com');
        cy.get('input[placeholder="Password"]').type('Hahahah');
        cy.wait(1000)
        cy.get('button[type="submit"]').click();
        cy.get('div.text-critical.mb-1').should('exist');        
    });

    it('Login With Null Password', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.get('a[href="/account/login"] svg').click();
        cy.get('input[placeholder="Email"]').type('Niken6@test.com');
        cy.get('input[placeholder="Password"]').clear();
        cy.wait(1000)
        cy.get('button[type="submit"]').click();
        cy.contains('span.pl025.text-critical', 'This field can not be empty').should('exist');     
    });

    it('Login With Both Field Empty', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.get('a[href="/account/login"] svg').click();
        cy.get('input[placeholder="Email"]').clear();
        cy.get('input[placeholder="Password"]').clear();
        cy.wait(1000)
        cy.get('button[type="submit"]').click();
        cy.contains('span.pl025.text-critical', 'This field can not be empty').should('exist');     
    });

    it('Logout', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.get('a[href="/account/login"] svg').click();
        cy.get('input[placeholder="Email"]').type('Niken6@test.com');
        cy.get('input[placeholder="Password"]').type('Password1');
        cy.get('button[type="submit"]').click();
        cy.get('a[href="/account"] svg').click();
        cy.contains('Niken6@test.com').should('exist');
        cy.contains('Logout').click();
    });


 })