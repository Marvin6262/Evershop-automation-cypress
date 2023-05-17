import { getRandomEmail } from "../utils/faker";

describe('Signup Page', () => {
    
    //Signup With Faker
    it('Signup', () => {    
        const email = getRandomEmail()
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.get('a[href="/account/login"] svg').click();
        cy.contains('a', 'Create an account').click();
        cy.get('input[placeholder="Full Name"]').type('Niken');
        cy.get('input[placeholder="Email"]').type(email);
        cy.get('input[placeholder="Password"]').type('Password1');
        cy.contains('span', 'SIGN UP').click();
        cy.get('a[href="/account"] svg').click();
        cy.contains(email).should('exist');
    });

    it('Sign Up With Exist Email', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.get('a[href="/account/login"] svg').click();
        cy.contains('a', 'Create an account').click();
        cy.get('input[placeholder="Full Name"]').type('Niken');
        cy.get('input[placeholder="Email"]').type('Niken4@test.com');
        cy.get('input[placeholder="Password"]').type('Password1');
        cy.contains('span', 'SIGN UP').click();
        cy.get('div.text-critical.mb-1').should('exist');

    });

    it('Not Fill the Form', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.get('a[href="/account/login"] svg').click();
        cy.contains('a', 'Create an account').click();
        cy.get('input[placeholder="Full Name"]').type(' ');
        cy.get('input[placeholder="Email"]').type(' ');
        cy.get('input[placeholder="Password"]').type(' ');
        cy.contains('span', 'SIGN UP').click();
    });

    
});