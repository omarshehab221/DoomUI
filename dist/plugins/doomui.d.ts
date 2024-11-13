import { type ThemeConfig } from '@theme/config';
export declare const doomUI: (config?: ThemeConfig) => {
    handler: import("tailwindcss/types/config").PluginCreator;
    config?: Partial<import("tailwindcss/types/config").Config> | undefined;
};
