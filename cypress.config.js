module.exports = {
  e2e: {
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      baseUrl: "http://127.0.0.1:5500",
    }
  },
};
