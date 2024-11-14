import path from "node:path";
import fs from "fs-extra";
import ora from "ora";
import { execSync } from "node:child_process";
import { logger } from "../utils/logger";

export default async function init() {
  const spinner = ora("Initializing Doom UI...").start();

  try {
    // Create doom-ui directory
    const componentDir = path.join(process.cwd(), "components", "doom-ui");
    await fs.ensureDir(componentDir);

    // Copy configuration files
    const configDir = path.join(process.cwd());

    // Check if tailwind.config.js exists
    const tailwindConfigPath = path.join(configDir, "tailwind.config.js");
    if (!(await fs.pathExists(tailwindConfigPath))) {
      await fs.copyFile(
        path.join(__dirname, "../templates/config/tailwind.config.js"),
        tailwindConfigPath
      );
    } else {
      // Modify existing tailwind config to include doom-ui plugin
      let tailwindConfig = await fs.readFile(tailwindConfigPath, "utf8");
      if (!tailwindConfig.includes("@doom-ui/core")) {
        tailwindConfig = tailwindConfig.replace(
          "module.exports = {",
          `const { doomUI } = require('@doom-ui/core');\n\nmodule.exports = {`
        );
        tailwindConfig = tailwindConfig.replace(
          "plugins: [",
          "plugins: [\n    doomUI(),"
        );
        await fs.writeFile(tailwindConfigPath, tailwindConfig);
      }
    }

    // Install dependencies
    spinner.text = "Installing dependencies...";
    execSync("npm install @doom-ui/core", { stdio: "inherit" });

    spinner.succeed("Doom UI initialized successfully!");
    logger.info("You can now add components using: doom add <component>");
  } catch (error) {
    spinner.fail("Failed to initialize Doom UI");
    logger.error(error as Error);
    process.exit(1);
  }
}
