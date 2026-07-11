import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Magic Feed',
  description:
    'Save links, generate beautiful share cards, download images, and back up your feed — a rich content sharing app built with Flutter.',
  base: '/',
  lang: 'en-US',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#1ca160' }],
    ['meta', { property: 'og:title', content: 'Magic Feed' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'Rich content sharing, built with Flutter.'
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Features', link: '/features' },
      { text: 'Privacy', link: '/privacy' },
      {
        text: 'GitHub',
        link: 'https://github.com/ShinChven/magic-feed-docs'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Adding Links', link: '/guide/adding-links' },
            { text: 'Share Cards & QR Codes', link: '/guide/share-cards' },
            { text: 'Images & Gallery', link: '/guide/images-gallery' },
            { text: 'Backup & Restore', link: '/guide/backup-restore' },
            { text: 'Settings', link: '/guide/settings' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ShinChven/magic-feed-docs' }
    ],
    footer: {
      message: 'Built with Flutter. Documentation powered by VitePress.',
      copyright: `Copyright © ${new Date().getFullYear()} ShinChven`
    },
    search: {
      provider: 'local'
    }
  }
})
