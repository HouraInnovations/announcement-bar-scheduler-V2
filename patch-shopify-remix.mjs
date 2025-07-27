// patch-shopify-remix.js

const fs = require("fs");
import path from "path";

const remixPkgPath = "./node_modules/@shopify/shopify-app-remix/package.json";

try {
  const remixPkg = JSON.parse(fs.readFileSync(remixPkgPath, "utf8"));

  remixPkg.exports = {
    ".": "./dist/index.js",
    "./react": "./dist/react.js",
    "./server": "./dist/server.js"
  };

  fs.writeFileSync(remixPkgPath, JSON.stringify(remixPkg, null, 2));
  console.log("✅ Patched @shopify/shopify-app-remix exports.");
} catch (err) {
  console.error("❌ Failed to patch @shopify/shopify-app-remix:", err);
}
