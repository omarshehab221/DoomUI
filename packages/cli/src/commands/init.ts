import path from "node:path";
import fs from "fs-extra";
import ora from "ora";
import { execSync } from "node:child_process";
import { logger } from "../utils/logger.js";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default async function init() {
  const spinner = ora("Initializing Doom UI...").start();

  try {
    // Create doom-ui directory
    const componentDir = path.join(process.cwd(), "components", "doom-ui");
    await fs.ensureDir(componentDir);

    // Copy configuration files
    const configDir = path.join(process.cwd());

    // Check for both .js and .ts tailwind config
    const tailwindConfigPathJS = path.join(configDir, "tailwind.config.js");
    const tailwindConfigPathTS = path.join(configDir, "tailwind.config.ts");
    
    const existingConfigPath = await fs.pathExists(tailwindConfigPathTS) 
      ? tailwindConfigPathTS 
      : await fs.pathExists(tailwindConfigPathJS)
        ? tailwindConfigPathJS
        : null;

    if (!existingConfigPath) {
      // No config exists, create new one (default to TS)
      await fs.copyFile(
        path.join(__dirname, "../../templates/config/tailwind.config.ts"),
        tailwindConfigPathTS
      );
    } else {
      // Modify existing config
      let tailwindConfig = await fs.readFile(existingConfigPath, "utf8");
      if (!tailwindConfig.includes("@doom-ui/core")) {
        const isTS = path.extname(existingConfigPath) === '.ts';
        const importStatement = isTS 
          ? `import { doomUI } from "@doom-ui/core";\n\n`
          : `const { doomUI } = require('@doom-ui/core');\n\n`;

        if (isTS && tailwindConfig.includes("export default")) {
          tailwindConfig = tailwindConfig.replace(
            "export default",
            `${importStatement}export default`
          );
        } else {
          tailwindConfig = tailwindConfig.replace(
            "module.exports = {",
            `${importStatement}module.exports = {`
          );
        }

        tailwindConfig = tailwindConfig.replace(
          "plugins: [",
          "plugins: [\n    doomUI(),"
        );
        await fs.writeFile(existingConfigPath, tailwindConfig);
      }
    }

    // Install dependencies
    spinner.text = "Installing dependencies...";
    execSync("npm install @doom-ui/core --force", { stdio: "inherit" });

    spinner.succeed("Doom UI initialized successfully!");
    logger.info("You can now add components using: npx @doom-ui/cli add <component>");
  } catch (error) {
    spinner.fail("Failed to initialize Doom UI");
    logger.error(error as Error);
    process.exit(1);
  }
}
