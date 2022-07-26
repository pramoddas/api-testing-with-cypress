const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://todo-app-barkend.herokuapp.com/',
  },
});
