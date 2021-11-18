const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
    const files = [
        "./dist/my-header/runtime.js",
        "./dist/my-header/polyfills.js",
        "./dist/my-header/main.js"
    ];
    await fs.ensureDir("elements");
    await concat(files, "elements/my-header.js");
})();