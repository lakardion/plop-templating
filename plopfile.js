import store from "./plops/store";
import typedComponent from "./plops/typed-component";

export default function (plop) {
  plop.setHelper("uppercase", (txt) => txt.toUpperCase());

  plop.setGenerator("typed-component", typedComponent);
  plop.setGenerator("store", store);
}
