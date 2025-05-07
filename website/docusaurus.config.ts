import { themes as prismThemes } from 'prism-react-renderer';
import path from 'path';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'React Admin Kit',
  tagline: '中后台应用的最佳伴侣',
  favicon: 'img/rak-r15.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jaykou25', // Usually your GitHub org/user name.
  projectName: 'react-admin-kit', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
  },

  plugins: [
    './plugins/alias.ts',
    [
      'docusaurus-plugin-lib-dev',
      {
        libPath: path.resolve(__dirname, '../packages/react-admin-kit/'),
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          routeBasePath: '/components',
          showReadingTime: false,
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          sortPosts: 'ascending',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          rehypePlugins: [
            [
              require('docusaurus-plugin-lib-dev-rehype'),
              {
                alias: {
                  '@@': path.resolve(
                    __dirname,
                    '../packages/react-admin-kit/src',
                  ),
                },
              },
            ],
          ],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'React Admin Kit',
      logo: {
        alt: 'RAK Logo',
        src: 'img/rak-r15.png',
      },
      items: [
        { to: '/intro', label: 'intro', position: 'left' },
        {
          to: '/components/schema-form',
          label: 'components',
          position: 'left',
        },
        { to: '/changelog', label: 'changelog', position: 'left' },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/jaykou25/react-admin-kit',
          label: 'gitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'doc',
          items: [
            {
              label: 'intro',
              to: '/intro',
            },
            {
              label: 'components',
              to: '/components/schema-form',
            },
          ],
        },
        {
          title: 'more',
          items: [
            {
              label: 'changelog',
              to: '/changelog',
            },
            {
              label: 'gitHub',
              href: 'https://github.com/jaykou25/react-admin-kit',
            },
          ],
        },
        {
          title: 'feedback',
          items: [
            {
              label: 'suggestions',
              href: 'https://github.com/jaykou25/react-admin-kit/issues',
            },
          ],
        },
      ],
      copyright: `React Admin Kit By Jay kou`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
