import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here.

const config: Config = {
  title: 'Tutorog Documentation',
  tagline: 'Documentation for the Tutorog learning community platform',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // Update this when you have the actual documentation domain.
  url: 'https://docs.tutorog.com',
  baseUrl: '/',

  // GitHub Pages deployment config.
  // Update these if the documentation is deployed through GitHub Pages.
  organizationName: 'tutorog',
  projectName: 'tutorog',

  onBrokenLinks: 'throw',

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
          routeBasePath: '/',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Tutorog',
      logo: {
        alt: 'Tutorog Logo',
        src: 'img/logo.svg',
      },

      items: [
        {
          href: 'https://tutorog.com',
          label: 'Tutorog',
          position: 'right',
        },
        {
          href: 'https://github.com/tutorog/tutorog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',

      links: [
        {
          items: [
            {
              label: 'Tutorog Staging',
              href: 'https://puza.click',
            }
          ]

        },
        // {
        //   title: 'Documentation',
        //   items: [
        //     {
        //       label: 'Overview',
        //       to: '/',
        //     },
        //     {
        //       label: 'Example Page',
        //       to: '/User%20Expectations/test',
        //     },
        //   ],
        // },

        {
          // title: 'Tutorog',
          items: [

            {
              label: 'GitHub',
              href: 'https://github.com/tutorog/tutorog',
            },
          ],
        },
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Tutorog. All rights reserved.`,
    },

    prism: {
      theme: prismThemes.dracula,
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;