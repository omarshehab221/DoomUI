export type ColorConfig = {
    light: Record<string, string>;
    dark: Record<string, string>;
};
export type ThemeConfig = {
    colors?: {
        primary?: ColorConfig;
        secondary?: ColorConfig;
        success?: ColorConfig;
        warning?: ColorConfig;
        info?: ColorConfig;
        danger?: ColorConfig;
        default?: ColorConfig;
    };
    radius?: {
        none?: string;
        small?: string;
        medium?: string;
        large?: string;
        full?: string;
    };
    spacing?: {
        small?: string;
        medium?: string;
        large?: string;
    };
};
export declare const defaultConfig: ThemeConfig;
