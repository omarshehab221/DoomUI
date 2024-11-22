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
        900: "#233876"
      },
      dark: {
        50: "#071B45",
        100: "#0E2B67",
        200: "#1939A0",
        300: "#2048CF",
        400: "#2563EB",
        500: "#3B82F6",
        600: "#60A5FA",
        700: "#93C5FD",
        800: "#BFDBFE",
        900: "#DBEAFE"
      }
    },
    secondary: {
      light: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E2E8F0",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A"
      },
      dark: {
        50: "#0F172A",
        100: "#1E293B",
        200: "#334155",
        300: "#475569",
        400: "#64748B",
        500: "#94A3B8",
        600: "#CBD5E1",
        700: "#E2E8F0",
        800: "#F1F5F9",
        900: "#F8FAFC"
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
        900: "#14532D"
      },
      dark: {
        50: "#052E16",
        100: "#064023",
        200: "#065F46",
        300: "#047857",
        400: "#16A34A",
        500: "#22C55E",
        600: "#4ADE80",
        700: "#86EFAC",
        800: "#BBF7D0",
        900: "#DCFCE7"
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
        900: "#78350F"
      },
      dark: {
        50: "#451A03",
        100: "#662706",
        200: "#923B0E",
        300: "#B45309",
        400: "#D97706",
        500: "#F59E0B",
        600: "#FBBF24",
        700: "#FCD34D",
        800: "#FDE68A",
        900: "#FEF3C7"
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
        900: "#7F1D1D"
      },
      dark: {
        50: "#450A0A",
        100: "#691212",
        200: "#991B1B",
        300: "#B91C1C",
        400: "#DC2626",
        500: "#EF4444",
        600: "#F87171",
        700: "#FCA5A5",
        800: "#FECACA",
        900: "#FEE2E2"
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
        900: "#1E3A8A"
      },
      dark: {
        50: "#172554",
        100: "#1E3A8A",
        200: "#1E40AF",
        300: "#1D4ED8",
        400: "#2563EB",
        500: "#3B82F6",
        600: "#60A5FA",
        700: "#93C5FD",
        800: "#BFDBFE",
        900: "#DBEAFE"
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
        900: "#111827"
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
        900: "#F9FAFB"
      }
    }
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
