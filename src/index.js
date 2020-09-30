const run = require("./minified.min");

module.exports = (code) => {
  return run(JSON.stringify(code));
};
