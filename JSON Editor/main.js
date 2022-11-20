const fs = require("fs");

const parseJsonFile = path => {
    const file = fs.readFileSync(path, "utf-8");

    return JSON.parse(file);
};

const changeJsonFile = (path, content) => {
    fs.writeFile(path, JSON.stringify(content, null, 4), 'utf8', e => {
        if (e) console.log(e);
    });
};

const editObjectNestedValue = (obj, key, newValue) => {
    const keys = key.split(".");

    if (keys.length === 1) {
        if (obj[key]) {
            obj[key] = newValue;
        }
    } else {
        editObjectNestedValue(obj[keys[0]], keys.splice(1).join("."), newValue);
    }
}

module.exports = {
    parseJsonFile,
    changeJsonFile,
    editObjectNestedValue
};