import fs from 'fs-extra';
import path from 'node:path';

async function copyTemplates() {
  const sourceDir = path.join(__dirname, '../../components/src/components');
  const targetDir = path.join(__dirname, '../templates');
  const componentsTargetDir = path.join(targetDir, 'components');
  
  // Remove existing components directory if it exists
  await fs.remove(componentsTargetDir);
  
  // Ensure templates directory exists and copy
  await fs.ensureDir(targetDir);
  await fs.copy(sourceDir, componentsTargetDir);
}

copyTemplates().catch(console.error); 