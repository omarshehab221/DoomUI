import { useConfig } from 'nextra-theme-docs'
import { useTheme } from 'next-themes'
import { ThemeProvider } from '@doom-ui/core'
import type { ReactNode } from 'react'

export default {
  logo: <span>Doom UI</span>,
  project: {
    link: 'https://github.com/omarshehab221/DoomUI'
  },
  docsRepositoryBase: 'https://github.com/omarshehab221/DoomUI/tree/main/packages/website',
  primaryHue: 200,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Doom UI'
    }
  },
  head: () => {
    const { theme } = useTheme()
    // const { frontMatter } = useConfig()
    
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <meta property="og:title" content={frontMatter.title || 'Doom UI'} />
        <meta property="og:description" content={frontMatter.description || 'React components for building modern applications'} /> */}
      </>
    )
  },
  components: {
    wrapper: ({ children }: { children: ReactNode }) => (
      <ThemeProvider>{children}</ThemeProvider>
    )
  }
} 