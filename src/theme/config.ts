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

export const defaultConfig: ThemeConfig = {
  colors: {
    primary: {
      light: {
        50: "#EBF5FF",
        100: "#E1EFFE",
        200: "#C3DDFD",
        300: "#A4CAFE",
        400: "#76A9FA",
        500: "#3F83F8",
        600: "#1C64F2",
        700: "#1A56DB",
        800: "#1E429F",
        900: "#233876",
      },
      dark: {
        50: "#1E3A8A",
        100: "#1E40AF",
        200: "#1D4ED8",
        300: "#2563EB",
        400: "#3B82F6",
        500: "#60A5FA",
        600: "#93C5FD",
        700: "#BFDBFE",
        800: "#DBEAFE",
        900: "#EFF6FF",
      }
    },
    success: {
      light: {
        50: "#F0FDF4",
        100: "#DCFCE7",
        200: "#BBF7D0",
        300: "#86EFAC",
        400: "#4ADE80",
        500: "#22C55E",
        600: "#16A34A",
        700: "#15803D",
        800: "#166534",
        900: "#14532D",
      },
      dark: {
        50: "#166534",
        100: "#15803D",
        200: "#16A34A",
        300: "#22C55E",
        400: "#4ADE80",
        500: "#86EFAC",
        600: "#BBF7D0",
        700: "#DCFCE7",
        800: "#EFF6FF",
        900: "#F0FDF4",
      }
    },
    warning: {
      light: {
        50: "#FFFBEB",
        100: "#FEF3C7",
        200: "#FDE68A",
        300: "#FCD34D",
        400: "#FBBF24",
        500: "#F59E0B",
        600: "#D97706",
        700: "#B45309",
        800: "#92400E",
        900: "#78350F",
      },
      dark: {
        50: "#78350F",
        100: "#92400E",
        200: "#B45309",
        300: "#D97706",
        400: "#F59E0B",
        500: "#FBBF24",
        600: "#FCD34D",
        700: "#FEF3C7",
        800: "#FFFBEB",
        900: "#FFFBEB",
      }
    },
    danger: {
      light: {
        50: "#FEF2F2",
        100: "#FEE2E2",
        200: "#FECACA",
        300: "#FCA5A5",
        400: "#F87171",
        500: "#EF4444",
        600: "#DC2626",
        700: "#B91C1C",
        800: "#991B1B",
        900: "#7F1D1D",
      },
      dark: {
        50: "#7F1D1D",
        100: "#991B1B",
        200: "#B91C1C",
        300: "#DC2626",
        400: "#EF4444",
        500: "#F87171",
        600: "#FCA5A5",
        700: "#FECACA",
        800: "#FEE2E2",
        900: "#FEF2F2",
      }
    },
    info: {
      light: {
        50: "#EFF6FF",
        100: "#DBEAFE",
        200: "#BFDBFE",
        300: "#93C5FD",
        400: "#60A5FA",
        500: "#3B82F6",
        600: "#2563EB",
        700: "#1D4ED8",
        800: "#1E40AF",
        900: "#1E3A8A",
      },
      dark: {
        50: "#1E3A8A",
        100: "#1E40AF",
        200: "#1D4ED8",
        300: "#2563EB",
        400: "#3B82F6",
        500: "#60A5FA",
        600: "#93C5FD",
        700: "#BFDBFE",
        800: "#DBEAFE",
        900: "#EFF6FF",
      }
    },
    default: {
      light: {
        50: "#F9FAFB",
        100: "#F3F4F6",
        200: "#E5E7EB",
        300: "#D1D5DB",
        400: "#9CA3AF",
        500: "#6B7280",
        600: "#4B5563",
        700: "#374151",
        800: "#1F2937",
        900: "#111827",
      },
      dark: {
        50: "#111827",
        100: "#1F2937",
        200: "#374151",
        300: "#4B5563",
        400: "#6B7280",
        500: "#9CA3AF",
        600: "#D1D5DB",
        700: "#E5E7EB",
        800: "#F3F4F6",
        900: "#F9FAFB",
      }
    },
  },
  radius: {
    none: "0px",
    small: "0.125rem",
    medium: "0.375rem",
    large: "0.5rem",
    full: "9999px",
  },
  spacing: {
    small: "0.75rem",
    medium: "1rem",
    large: "1.5rem",
  },
};
