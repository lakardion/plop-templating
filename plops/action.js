const root = "{{relativePath}}/{{pascalCase store}}";
module.exports = {
  description: "Add an action to an existing store",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Action name",
    },
    {
      type: "input",
      name: "store",
      message: "Existing store name",
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
    {
      type: "input",
      name: "relativePath",
      message: "Relative path",
      default: ".",
    },
  ],
  actions: [
    {
      type: "modify",
      path: `${root}/{{camelCase store}}ActionTypes.ts`,
      pattern: /(\/\*\*--AppendAction \*\/;)/,
      templateFile: "plop-templates/new-action.hbs",
    },
    {
      type: "modify",
      path: `${root}/{{camelCase store}}ActionTypes.ts`,
      pattern: /(\/\/--AppendType)/,
      templateFile: "plop-templates/new-action-type.hbs",
    },
    {
      type: "modify",
      path: `${root}/{{camelCase store}}Reducer.ts`,
      pattern: /(\/\/--AppendCase)/,
      templateFile: "plop-templates/reducer-case.hbs",
    },
    {
      type: "modify",
      path: `${root}/{{camelCase store}}ActionCreators.ts`,
      pattern: /(\/\/--AppendCreator)/,
      templateFile: "plop-templates/action-creator.hbs",
    },
    {
      type: "modify",
      path: `${root}/index.ts`,
      pattern: /(\/\/--AppendCreator)/,
      template: "\t{{camelCase name}},\n//--AppendCreator",
    },
  ],
};
