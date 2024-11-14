import path from "node:path";
import fs from "fs-extra";
import ora from "ora";
import { logger } from "../utils/logger";
import { execSync } from "node:child_process";

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
      execSync(`npm install ${component.dependencies.join(' ')}`, { stdio: 'inherit' });
    }

    const componentDir = path.join(process.cwd(), 'components', 'doom-ui', componentName);
    await fs.ensureDir(componentDir);

    // Copy component files
    for (const file of component.files) {
      const sourcePath = path.join(__dirname, `../templates/components/${file}`);
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
