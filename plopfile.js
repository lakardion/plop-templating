import action from "./plops/action.js";
import store from "./plops/store.js";
import typedComponent from "./plops/typed-component.js";

export default function (plop) {
  plop.setHelper("uppercase", (txt) => txt.toUpperCase());

  plop.setGenerator("typed-component", typedComponent);
  plop.setGenerator("store", store);
  plop.setGenerator("add-action", action);
}
