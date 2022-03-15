module.exports = {
  description: "Create a slice of state for a store",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Slice name",
    },
    {
      type: "input",
      name: "relativePath",
      message: "Relative path",
      default: ".",
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
      templateFile: "plop-templates/action-creators.ts.hbs",
    },
    {
      type: "add",
      path: "{{relativePath}}/{{pascalCase name}}/index.ts",
      templateFile: "plop-templates/store-index.ts.hbs",
    },
  ],
};
