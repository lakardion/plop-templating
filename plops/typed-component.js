module.exports = {
  description: "Create typed function component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Component name",
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
      path: "{{relativePath}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
      templateFile: "plop-templates/typed-component.tsx.hbs",
    },
    {
      type: "add",
      path: "{{relativePath}}/{{pascalCase name}}/index.ts",
      templateFile: "plop-templates/component-index.ts.hbs",
    },
  ],
};
