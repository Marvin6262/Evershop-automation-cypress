const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
     
    },
    //Project ID Untuk Cypress Cloud
    projectId: "x87oy7",

    //Untuk Retry Jika Test Case gagal
    retries: {
      "runMode": 2,
      "openMode": 4
    },
    reporter: 'mochawesome'
  },
});
