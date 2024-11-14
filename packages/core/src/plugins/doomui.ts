import plugin from 'tailwindcss/plugin';
import { type ThemeConfig, defaultConfig } from '@theme/config';

export const doomUI = (config: ThemeConfig = {}) => {
  const mergedConfig = {
    colors: { ...defaultConfig.colors, ...config.colors },
    radius: { ...defaultConfig.radius, ...config.radius },
    spacing: { ...defaultConfig.spacing, ...config.spacing },
  };

  return plugin(
    ({ addBase, addComponents, addUtilities }) => {
      // Add base styles with CSS variables for both modes
      addBase({
        ':root': {
          ...Object.entries(mergedConfig.colors).reduce((acc, [colorName, colorConfig]) => {
            for (const [shade, value] of Object.entries(colorConfig.light)) {
              acc[`--doom-${colorName}-${shade}`] = value;
            }
            return acc;
          }, {} as Record<string, string>),
        },
        '.dark': {
          ...Object.entries(mergedConfig.colors).reduce((acc, [colorName, colorConfig]) => {
            for (const [shade, value] of Object.entries(colorConfig.dark)) {
              acc[`--doom-${colorName}-${shade}`] = value;
            }
            return acc;
          }, {} as Record<string, string>),
        },
      });

      // Add component classes - Fixed by ensuring all values are strings
      addComponents({
        '.doom-btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          fontWeight: '600',
          padding: mergedConfig.spacing.medium && mergedConfig.spacing.large ? 
            `${mergedConfig.spacing.medium} ${mergedConfig.spacing.large}` : 
            '1rem 1.5rem',
          borderRadius: mergedConfig.radius.medium || '0.375rem',
          transition: 'all 150ms ease-in-out',
          '&:focus': {
            outline: 'none',
            ringWidth: '2px',
            ringOffset: '2px',
          },
        } as const,
      });

      // Add utility classes
      addUtilities({
        '.doom-text-shadow': {
          textShadow: '0 2px 4px var(--tw-shadow-color)',
        },
      });
    },
    {
      theme: {
        extend: {
          colors: Object.entries(mergedConfig.colors).reduce((acc, [colorName, colorConfig]) => {
            acc[colorName] = Object.entries(colorConfig.light).reduce((shadeAcc, [shade, value]) => {
              shadeAcc[shade] = `var(--doom-${colorName}-${shade})`;
              return shadeAcc;
            }, {} as Record<string, string>);
            return acc;
          }, {} as Record<string, Record<string, string>>),
          borderRadius: mergedConfig.radius,
          spacing: mergedConfig.spacing,
        },
      },
    }
  );
}; 