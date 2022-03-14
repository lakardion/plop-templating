export default function (plop) {
  plop.setHelper("uppercase", (txt) => txt.toUpperCase());

  plop.setGenerator("typed-component", {
    description: "Create typed function component",
    prompts: [
      {
        type: "input",
        name: "relativePath",
        message: "Relative path",
        default: ".",
      },
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{relativePath}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/typed-component.tsx.hbs",
      },
      {
        type: "add",
        path: "{{relativePath}}/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/component-index.ts.hbs",
      },
    ],
  });

  plop.setGenerator("store", {
    description: "Create a slice of state for a store",
    prompts: [
      {
        type: "input",
        name: "relativePath",
        message: "Relative path",
        default: ".",
      },
      {
        type: "input",
        name: "name",
        message: "Slice name",
      },
    ],
    actions: [
      {
        type: "add",
        path: "{{relativePath}}/{{pascalCase name}}/{{camelCase name}}Reducer.ts",
        templateFile: "plop-templates/reducer.ts.hbs",
      },
      {
        type: "add",
        path: "{{relativePath}}/{{pascalCase name}}/{{camelCase name}}ActionTypes.ts",
        templateFile: "plop-templates/action-types.ts.hbs",
      },
      {
        type: "add",
        path: "{{relativePath}}/{{pascalCase name}}/{{camelCase name}}ActionCreators.ts",
      },
      {
        type: "add",
        path: "{{relativePath}}/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/store-index.ts.hbs",
      },
    ],
  });
}
