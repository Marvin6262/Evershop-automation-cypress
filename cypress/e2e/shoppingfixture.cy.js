describe('ShoppingFixtre', () => {  
    it('Shopping Login & Non Login', () => {

        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        cy.fixture('homepageproduct').then((data)=>{
    
            data.forEach((productdata) => {
    
                if(productdata.Login == 'Yes')
                {
                    cy.viewport(1200, 800);
                    cy.visit('https://demo.evershop.io/')
                    cy.get('a[href="/account/login"] svg').click();
                    cy.get('input[placeholder="Email"]').type(productdata.Username);
                    cy.get('input[placeholder="Password"]').type(productdata.Password);
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
                    cy.get('a[href="/account"] svg').click();
                    cy.contains('Logout').click();
    
                }
                else if(productdata.Login == 'No')
                {
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
                } 
            });
        })
    })
 })
 