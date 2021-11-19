const PORT = 9785;
const path = require('path');
const express = require('express');
const delimeter = path.sep;

const copydir = require('copy-dir');
const app = express();

const pArr = __dirname.split(path.sep);
const staticPath = pArr.slice(0, pArr.length - 1).join(delimeter);
const formPath = `${staticPath}${delimeter}objec-struct-diff${delimeter}build`;
const toPath = `${__dirname}${delimeter}build`;
console.log({ formPath, toPath });
copydir.sync(formPath, toPath, { cover: true });

app.use(express.static('build'));
app.listen(PORT, () => {
    console.log(`App strated at ${PORT}`);
});


