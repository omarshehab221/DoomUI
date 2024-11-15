# @doom-ui/core

Core functionality for the Doom UI component library.

> **This package is still under development and is not yet ready for production use.**

## Installation

```bash
npm install @doom-ui/core
yarn add @doom-ui/core
pnpm add @doom-ui/core
bun add @doom-ui/core
deno add @doom-ui/core
```

## Usage

```typescript
// tailwind.config.js
import { doomUI } from "@doom-ui/core";

module.exports = {
  // ...
  plugins: [
    doomUI({
      // your config here
    }),
  ],
};
```

## Features

- Theme configuration system
- Dark mode support
- CSS variable system
- Utility functions
