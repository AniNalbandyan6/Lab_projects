const fs = require("fs");
const { parseJsonFile, changeJsonFile, editObjectNestedValue } = require("./main")

// to get parameters
const changedParameters = [...process.argv.splice(2)].map(param => param.split("="));

// to read the file
const userJson = parseJsonFile("./example.json");

// to change properties
for (let [key, value] of changedParameters) {
    if (key.includes(".")) {
        editObjectNestedValue(userJson, key, value);
    } else {
        userJson[key] = value;
    }
}

// to save changed properties
changeJsonFile("./example.json", userJson);