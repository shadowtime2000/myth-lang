#!/usr/bin/env node
const run = require("../src/minified.min");
const fs = require("fs");

const code = fs.readFileSync(process.argv[2]).toString();
console.log(run(code));
