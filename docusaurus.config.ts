import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Atlas DePIN',
  tagline: 'Blockchain docs, SDK reference, and developer guides',
  favicon: 'img/atlasprotocol_logo.png',

  future: {
    v4: true,
  },

  url: 'https://atlasprotocol.github.io',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: {
          blogTitle: 'Atlas Updates',
          blogDescription:
            'Biweekly news and progress updates from the Atlas DePIN ecosystem.',
          postsPerPage: 'ALL',
          showReadingTime: false,
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Atlas DePIN',
      logo: {
        alt: 'Atlas DePIN',
        src: 'img/atlasprotocol_logo_black.png',
        srcDark: 'img/atlasprotocol_logo.png',
      },
      items: [
        {
          to: '/docs/protocol/architecture',
          label: 'Documentation',
          position: 'left',
        },
        {
          to: '/blog/atlas-log-1',
          label: 'News & Insights',
          position: 'left',
        },
        {
          href: 'https://github.com/Atlas-DePIN',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [],
      copyright: `© ${new Date().getFullYear()} Atlas DePIN.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
