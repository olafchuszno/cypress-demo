const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    registerUrl: 'https://react-recoil-realworld.vercel.app/#/register',
    loginUrl: 'https://react-recoil-realworld.vercel.app/#/login',
    settingsUrl: 'https://react-recoil-realworld.vercel.app/#/settings',
    baseUrl: 'https://react-recoil-realworld.vercel.app/#/',
    apiBaseUrl: 'https://api.realworld.io/api',
    viewportHeight: 500,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
