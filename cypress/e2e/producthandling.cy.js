import 'cypress-xpath';

describe('Product Handle', () => { 

    it('Open Men Catalouge', () => {
        cy.viewport(1200, 800);
        cy.visit('https://demo.evershop.io/')
        //Open Men Tab
        cy.get('li:nth-child(3) a:nth-child(1)').click();
        
        //Handling Slider 
        //Ambil Lingkaran Kanan min 126 dan max 963
        cy.get('input[value="963"]').as('priceSlider');

        //Untuk Mencari Value angka yang dicari
        cy.get('@priceSlider').invoke('val', '450');
        cy.get('@priceSlider').invoke('val', '450').trigger('change');
        

        //Randomize Color Checkbox
        const Color = ['Black', 'White', 'Red', 'Blue', 'Grey'];

        //Processing Array Index
        const randomIndex = Math.floor(Math.random() * Color.length);
        const randomColor= Color[randomIndex];
        cy.wrap(randomColor).as('AcakColor');

        //Execute to the Xpath component
        cy.get('@AcakColor').then((value) => {
            cy.xpath(`//span[normalize-space()='${value}']`).click();
         });


        //Randomize Color Checkbox
        const Size = ['X', 'XL', 'S', 'M', 'L'];

         //Processing Array Index
         const Index = Math.floor(Math.random() * Size.length);
         const randomSize= Size[Index];
         cy.wrap(randomSize).as('AcakSize');

        //Execute to the Xpath component
        cy.get('@AcakSize').then((Size) => {
            cy.xpath(`//span[normalize-space()='${Size}']`).click();
         });


         cy.xpath("//select[@class='form-field']").select('price');

        
    });

 })