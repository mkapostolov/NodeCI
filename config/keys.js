switch (process.env.NODE_ENV) {
  case "production":
    module.exports = require("./prod");
    break;
  case "ci":
    module.exports = require("./ci");
    break;
  case "dev":
    module.exports = require("./dev");
    break;
  default:
    module.exports = require("./dev");
}
