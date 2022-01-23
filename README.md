# ☁️ Salesforce DX Project Starter Kit

The repository provides a template for Salesforce DX projects which includes an initial configuration of Prettier, Linter rules, git hooks and unit tests as well as useful VS Code settings. The setup currently focuses primarily on the development of Lightning Web Components.

## Getting started

To get the template up and runnning, you need to open the repository with VS Code, install all the recommended extensions and run `npm install` to install all required dependencies.

After that you need to authorize an org for which you want to develop. In VS Code this can be done by pressing **Command + Shift + P**, enter "sfdx", and select **SFDX: Authorize an Org**.

Alternatively you can also run the following command from the command line:

`sfdx force:auth:web:login`

## Code scaffolding

To generate new components in VS Code, press **Command + Shift + P**, enter "sfdx create", and select what you want to create, e.g. **SFDX: Create Lightning Web Component**.

Alternatively you can also create all components from the command line, e.g.:

```
cd force-app/main/default/lwc
sfdx force:lightning:component:create --type lwc -n helloWorld -d force-app/main/default/lwc
```

## Git hooks

The project includes client-side pre-commit git hooks using [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged). After installing all project dependencies, Prettier, Linter and unit tests are automatically executed before each commit.

## Prettier

Run `npm run prettier` to check for _Prettier_ issues.

## Linter

Run `npm run lint` to check for _ESLint_ issues

## Unit tests

Run

- `npm run test:unit` to execute all unit tests only once
- `npm run test:unit:watch` to execute all unit tests in watch mode for development
- `npm run test:unit:coverage` to execute all unit tests with generated code coverage

## Read more about Salesforce DX development

- [Salesforce Development Model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models)
- [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm)
- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
