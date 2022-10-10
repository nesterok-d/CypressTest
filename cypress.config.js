const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  env: {
    WWW1: "https://askona:askona@www1.askona.ru/?CHANGE_CITY_ID=84",
    WWW2: "https://askona:askona@www2.askona.ru/?CHANGE_CITY_ID=84",
    WWW5: "https://askona:askona@experiment.askona.ru/?CHANGE_CITY_ID=84",
    SITE_URL: "https://askona:askona@beta.askona.ru/?CHANGE_CITY_ID=84",
    CHECKOUT: "https://askona:askona@beta.askona.ru/cabinet/order/?CHANGE_CITY_ID=84",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://askona.ru",
  },


});
