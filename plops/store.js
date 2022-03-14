export default {
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
};
