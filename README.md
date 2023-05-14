# Evershop-automation-cypress
#link
(https://demo.evershop.io/)



## Installation node_modules

```bash
npm i --save-dev
```

## Running Test Spec

```bash
npx cypress open
```


## Change Cypress Cloud 
```
#Open cypress.config.js
#change Project id

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
    projectId: "your project id",
    retries: {
      runMode: 2
    },
    reporter: 'mochawesome'
  },
});

```

## Running Cloud Cypress
```
npx cypress run --record --key #your key
```
