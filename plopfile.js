const action = require("./plops/action.js");
const store = require("./plops/store.js");
const typedComponent = require("./plops/typed-component.js");

module.exports = function (
  /**@type {import('plop').NodePlopAPI*/
  plop
) {
  plop.setHelper("uppercase", (txt) => txt.toUpperCase());

  plop.setGenerator("typed-component", typedComponent);
  plop.setGenerator("store", store);
  plop.setGenerator("add-action", action);
};
