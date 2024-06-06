const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sool");
const source = fs.readFileSync(inboxPath, "utf-8");

//Export
module.exports = solc.compile(source, 1).contracts[":Inbox"];
