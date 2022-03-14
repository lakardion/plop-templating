export default {
  description: "Add an action to an existing store",
  prompts: [
    {
      type: "input",
      name: "relativePath",
      message: "Relative path",
      default: ".",
    },
    {
      type: "input",
      name: "store",
      message: "Existing store name",
    },
    {
      type: "input",
      name: "name",
      message: "Action name",
    },
    {
      type: "input",
      name: "payloadName",
      message: "Payload name",
    },
    {
      type: "input",
      name: "payloadType",
      message: "Payload type",
    },
  ],
  actions: [
    {
      type: "modify",
      path: "{{relativePath}}/{{pascalCase store}}/{{camelCase store}}ActionTypes.ts",
      pattern: /(\/\*\*--AppendAction \*\/;)/,
      templateFile: "plop-templates/new-action.hbs",
    },
    {
      type: "modify",
      path: "{{relativePath}}/{{pascalCase store}}/{{camelCase store}}ActionTypes.ts",
      pattern: /(\/\/--AppendType)/,
      templateFile: "plop-templates/new-action-type.hbs",
    },
    {
      type: "modify",
      path: "{{relativePath}}/{{pascalCase store}}/{{camelCase store}}Reducer.ts",
      pattern: /(\/\/--AppendCase)/,
      templateFile: "plop-templates/reducer-case.hbs",
    },
  ],
};
