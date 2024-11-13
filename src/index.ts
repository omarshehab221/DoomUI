import { doomUI } from './plugins/doomui';
import { ThemeProvider } from '@components/ThemeProvider';
import type { ThemeConfig } from '@theme/config';

// Core exports (available in node_modules)
export { doomUI, ThemeProvider };
export type { ThemeConfig };

// Re-export utility functions if any
export { cn } from '@utils/cn';
export { tv } from 'tailwind-variants';

// Export component types
export type { ButtonProps } from '@components/Button';
// export type { CardProps } from './components/Card';
// ... other component type exports 