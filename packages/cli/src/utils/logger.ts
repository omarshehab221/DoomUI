import chalk from 'chalk';

export const logger = {
  info: (message: string) => console.log(chalk.blue('info'), message),
  success: (message: string) => console.log(chalk.green('success'), message),
  warning: (message: string) => console.log(chalk.yellow('warning'), message),
  error: (message: Error | string) => console.log(chalk.red('error'), message instanceof Error ? message.message : message)
};
