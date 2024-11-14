import path from 'node:path';
import fs from 'fs-extra';
import ora from 'ora';
import { logger } from '../utils/logger';

const COMPONENTS_MAP = {
  button: {
    files: ['Button.tsx'],
    dependencies: []
  },
  // Add more components here
};

export default async function add(componentName: string) {
  const spinner = ora(`Adding ${componentName} component...`).start();

  try {
    const component = COMPONENTS_MAP[componentName.toLowerCase() as keyof typeof COMPONENTS_MAP];
    if (!component) {
      spinner.fail(`Component "${componentName}" not found`);
      return;
    }

    const componentDir = path.join(process.cwd(), 'components', 'doom-ui');
    await fs.ensureDir(componentDir);

    // Copy component files
    for (const file of component.files) {
      const sourcePath = path.join(__dirname, `../templates/components/${componentName}/${file}`);
      const destPath = path.join(componentDir, file);
      await fs.copyFile(sourcePath, destPath);
    }

    spinner.succeed(`${componentName} component added successfully!`);
    logger.info(`Component added to: components/doom-ui/${componentName}.tsx`);
  } catch (error) {
    spinner.fail(`Failed to add ${componentName} component`);
    logger.error(error as Error);
    process.exit(1);
  }
}
