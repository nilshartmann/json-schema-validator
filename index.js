const fs = require("fs");
const Ajv = require("ajv/dist/2020");
const addFormats = require("ajv-formats");

if (process.argv.length !== 4) {
  console.error("Please specify schemaFileName and jsonFileName as args");
  console.error("node schema-validator schemaFile jsonFile");
  process.exit(1);
}

const schemaFileName = process.argv[2];
const jsonFileName = process.argv[3];

console.log(
  `Validating '${jsonFileName}' with schema file '${schemaFileName}'`
);

const schema = JSON.parse(fs.readFileSync(schemaFileName, "utf8"));
const data = JSON.parse(fs.readFileSync(jsonFileName, "utf8"));

const ajv = new Ajv({
  allErrors: true,
});

addFormats(ajv);

try {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  if (!valid) {
    console.error("File contains errors", validate.errors);
    process.exit(-1);
  }
} catch (e) {
  console.error("Validation failed: ", e);
  process.exit(-2);
}

console.log("Schema valid!");
