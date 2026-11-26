const path = require("node:path");
const webpack = require("webpack");

const compiler = webpack({
  mode: "production",
  target: "node",
  entry: "./index.mjs",
  optimization: { minimize: !process.argv.includes("--no-minimize") },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.mjs",
    library: { type: "module" }
  }
});

compiler.run((error, stats) => {
  compiler.close((closeError) => {
    if (error || closeError || stats.hasErrors()) {
      console.error(error || closeError || stats.toString("errors-only"));
      process.exitCode = 1;
      return;
    }
    console.log(stats.toString("minimal"));
  });
});
