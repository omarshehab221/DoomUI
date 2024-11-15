import path from "node:path";
import fs from "fs-extra";
import ora from "ora";
import { logger } from "../utils/logger.js";
import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy templates to CLI package
const TEMPLATES_DIR = path.join(__dirname, "../templates/components");

const COMPONENTS_MAP = {
  button: {
    files: [
      "Button/index.ts",
      "Button/Button.tsx",
      "Button/button.styles.ts",
      "Button/types.ts",
    ],
    dependencies: ["@doom-ui/core", "@iconify/react"],
  },
};

export default async function add(componentName: string) {
  const spinner = ora(`Adding ${componentName} component...`).start();

  try {
    const component = COMPONENTS_MAP[componentName.toLowerCase() as keyof typeof COMPONENTS_MAP];
    if (!component) {
      spinner.fail(`Component "${componentName}" not found`);
      return;
    }

    // Install dependencies if needed
    if (component.dependencies.length > 0) {
      spinner.text = 'Installing dependencies...';
      execSync(`npm install ${component.dependencies.join(' ')} --force`, { stdio: 'inherit' });
    }

    const componentDir = path.join(process.cwd(), 'components', 'doom-ui', componentName);
    await fs.ensureDir(componentDir);

    // Copy component files from CLI templates
    for (const file of component.files) {
      const sourcePath = path.join(TEMPLATES_DIR, file);
      const destPath = path.join(componentDir, path.basename(file));
      await fs.copyFile(sourcePath, destPath);
    }

    spinner.succeed(`${componentName} component added successfully!`);
    logger.info(`Component added to: components/doom-ui/${componentName}`);
  } catch (error) {
    spinner.fail(`Failed to add ${componentName} component`);
    logger.error(error as Error);
    process.exit(1);
  }
}
