const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      isMobile: false
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
