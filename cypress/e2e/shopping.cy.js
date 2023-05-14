describe('addcartshoppinglist', () => { 


    it('Enter 1 Feature Product', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.contains('span', 'Nike air zoom pegasus 35').click();

        
    });

    it('Failed Add to cart', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.contains('span', 'Nike air zoom pegasus 35').click();
        cy.get('button[type="button"]').click();
        cy.contains('div.variant-validate.error.text-critical', 'Please select variant options').should('exist');

    });

    it('Add Product Variant to cart', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.contains('span', 'Nike air zoom pegasus 35').click();
        cy.contains('a', 'L').click();
        cy.contains('a', 'Black').click();
        cy.wait(3000)
        cy.get('button[type="button"]').click();
        cy.get('a.mini-cart-icon svg').click();
    });

    it('Check Out 1 Product Without Login', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.contains('span', 'Nike air zoom pegasus 35').click();
        cy.contains('a', 'L').click();
        cy.contains('a', 'Black').click();
        cy.wait(3000)
        cy.get('button[type="button"]').click();
        cy.get('a.mini-cart-icon svg').click();
        cy.get('a.button.primary').click();
        cy.get('input[placeholder="Email"]').type('Nikentest@gmail.com');
        cy.contains('span', 'Continue to shipping').click();
        cy.get('input[placeholder="Full name"]').type('Niken');
        cy.get('input[placeholder="Telephone"]').type('081225616172');
        cy.get('input[placeholder="Address"]').type('JL Petung');
        cy.get('input[placeholder="City"]').type('Yogyakarta');
        cy.get('#address\\[country\\]').select('US')
        cy.get('#address\\[province\\]').select('US-NV');
        cy.get('input[placeholder="Postcode"]').type('10001');
        cy.wait(3000)
        cy.get('label[for="method0"] span.radio-unchecked').click();
        cy.get('button[type="button"]').click();
        cy.wait(3000)
        cy.get('div.checkout-payment.checkout-step div div:first-child div:first-child div:first-child div:first-child div:first-child a:first-child svg').click();
        cy.get('button[type="button"]').click();
        cy.url().should('contain', 'https://demo.evershop.io/checkout/success/');
    });

    it('Check Out With Login', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.get('a[href="/account/login"] svg').click();
        cy.get('input[placeholder="Email"]').type('Niken6@test.com');
        cy.get('input[placeholder="Password"]').type('Password1');
        cy.get('button[type="submit"]').click();
        cy.contains('span', 'Nike air zoom pegasus 35').click();
        cy.contains('a', 'L').click();
        cy.contains('a', 'Black').click();
        cy.wait(3000)
        cy.get('button[type="button"]').click();
        cy.wait(3000)
        cy.get('a.mini-cart-icon svg').click();
        cy.get('a.button.primary').click();
        cy.get('input[placeholder="Full name"]').type('Niken');
        cy.get('input[placeholder="Telephone"]').type('081225616172');
        cy.get('input[placeholder="Address"]').type('JL Petung');
        cy.get('input[placeholder="City"]').type('Yogyakarta');
        cy.get('#address\\[country\\]').select('US')
        cy.get('#address\\[province\\]').select('US-NV');
        cy.get('input[placeholder="Postcode"]').type('10001');
        cy.wait(3000)
        cy.get('label[for="method0"] span.radio-unchecked').click();
        cy.get('button[type="button"]').click();
        cy.wait(3000)
        cy.get('div.checkout-payment.checkout-step div div:first-child div:first-child div:first-child div:first-child div:first-child a:first-child svg').click();
        cy.get('button[type="button"]').click();
        cy.url().should('contain', 'https://demo.evershop.io/checkout/success/');
        
    });

    it('Check Out More than 1 Product Without Login', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.contains('span', 'Nike air zoom pegasus 35').click();
        cy.contains('a', 'L').click();
        cy.wait(3000)
        cy.contains('a', 'Black').click();
        cy.wait(3000)
        cy.get('button[type="button"]').click();
        cy.wait(3000)
        cy.get('.logo').click();
        cy.contains('span', 'Geography class chuck taylor all star').click();
        cy.contains('a', 'XL').click();
        cy.contains('a', 'Black').click();
        cy.wait(3000)
        cy.get('button[type="button"]').click();
        cy.wait(3000)
        cy.get('a.mini-cart-icon svg').click();
        cy.get('a.button.primary').click();
        cy.get('input[placeholder="Email"]').type('Nikentest@gmail.com');
        cy.contains('span', 'Continue to shipping').click();
        cy.get('input[placeholder="Full name"]').type('Niken');
        cy.get('input[placeholder="Telephone"]').type('081225616172');
        cy.get('input[placeholder="Address"]').type('JL Petung');
        cy.get('input[placeholder="City"]').type('Yogyakarta');
        cy.get('#address\\[country\\]').select('US')
        cy.get('#address\\[province\\]').select('US-NV');
        cy.get('input[placeholder="Postcode"]').type('10001');
        cy.wait(3000)
        cy.get('label[for="method0"] span.radio-unchecked').click();
        cy.get('button[type="button"]').click();
        cy.wait(3000)
        cy.get('div.checkout-payment.checkout-step div div:first-child div:first-child div:first-child div:first-child div:first-child a:first-child svg').click();
        cy.get('button[type="button"]').click();
        cy.url().should('contain', 'https://demo.evershop.io/checkout/success/');

    });

    it('Check Out More than 1 Product With Login', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.get('a[href="/account/login"] svg').click();
        cy.get('input[placeholder="Email"]').type('Niken6@test.com');
        cy.get('input[placeholder="Password"]').type('Password1');
        cy.get('button[type="submit"]').click();
        cy.contains('span', 'Nike air zoom pegasus 35').click();
        cy.contains('a', 'L').click();
        cy.wait(3000)
        cy.contains('a', 'Black').click();
        cy.wait(3000)
        cy.get('button[type="button"]').click();
        cy.wait(3000)
        cy.get('.logo').click();
        cy.contains('span', 'Geography class chuck taylor all star').click();
        cy.contains('a', 'XL').click();
        cy.contains('a', 'Black').click();
        cy.wait(3000)
        cy.get('button[type="button"]').click();
        cy.wait(3000)
        cy.get('a.mini-cart-icon svg').click();
        cy.get('a.button.primary').click();
        cy.get('input[placeholder="Full name"]').type('Niken');
        cy.get('input[placeholder="Telephone"]').type('081225616172');
        cy.get('input[placeholder="Address"]').type('JL Petung');
        cy.get('input[placeholder="City"]').type('Yogyakarta');
        cy.get('#address\\[country\\]').select('US')
        cy.get('#address\\[province\\]').select('US-NV');
        cy.get('input[placeholder="Postcode"]').type('10001');
        cy.wait(3000)
        cy.get('label[for="method0"] span.radio-unchecked').click();
        cy.get('button[type="button"]').click();
        cy.wait(3000)
        cy.get('div.checkout-payment.checkout-step div div:first-child div:first-child div:first-child div:first-child div:first-child a:first-child svg').click();
        cy.get('button[type="button"]').click();
        cy.url().should('contain', 'https://demo.evershop.io/checkout/success/');
    });


 })