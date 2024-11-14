import type { ReactNode } from "react";
import { ThemeProvider } from "@doom-ui/core";

export default function Provider({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
