# JSON Schema Validator

JSON Schema Validator based on [ajv](https://ajv.js.org/)

## Usage

```bash

yarn install

node index.js pathToSchemaFile pathToJsonFile

```

If anything failes, process return non-zero exit code, otherwise zero.

For more information: https://ajv.js.org/guide/why-ajv.html. Note that v8 of ajv is used here, docs sometimes refer to older versions.
