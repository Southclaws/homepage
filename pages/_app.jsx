import React from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { MDXProvider } from '@mdx-js/react';

import { Socials } from '../src/Links';
import { Bold } from '../src/icons/Southclaws';

const YEAR = new Date().getFullYear();
const SEO = {
  title: 'Homepage, Work and Social Links',
  titleTemplate: '%s | Southclaws',
  description:
    'Homepage, work and social links for Southclaws, aka Barnaby Keene.',
  canonical: 'https://www.southcla.ws',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.southcla.ws',
    profile: {
      firstName: 'Barnaby',
      lastName: 'Keene',
      username: 'Southclaws'
    },
    images: [
      {
        url: '/static/southclaws-bold-light-0500.png',
        width: 500,
        height: 500,
        alt: 'Southclaws Logo (Light)'
      },
      {
        url: '/static/2019.webp',
        width: 100,
        height: 100,
        alt: 'Photograph of Barnaby "Southclaws" Keene (2019)'
      }
    ]
  },
  twitter: {
    handle: '@Southclaws',
    site: '@Southclaws',
    cardType: 'summary_large_image'
  }
};

const Header = () => (
  <header>
    <picture>
      <source srcset="/static/2019.webp" />
      <img
        src="/static/2019.jpg"
        alt="A photograph of Barnaby Keene (Southclaws) standing before a mountain."
      />
    </picture>

    <br />
    <Bold width={64} height={64} />
    <br />
    <Socials />

    <style jsx global>{`
      header {
        font-family: Inter, sans-serif;
        text-align: center;
      }
      img {
        border-radius: 50px;
        margin-top: 1em;
      }
      h1 {
        margin: 0em 0em 0.5em 0em;
        color: #333333;
        display: inline-block;
        font-size: 2em;
        font-weight: 900;
      }
    `}</style>
  </header>
);

const Footer = () => (
  <footer>
    <p>{YEAR} &copy; Barnaby "Southclaws" Keene All Rights Reserved</p>

    <style jsx>{`
      footer {
        font-size: smaller;
        text-align: center;
        color: hsl(0, 0%, 50%);
      }
    `}</style>
  </footer>
);

export default ({ Component, pageProps }) => (
  <>
    <DefaultSeo {...SEO} />

    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#ff3200" />
      <meta name="msapplication-TileColor" content="#ff3200" />
      <meta
        name="msapplication-TileImage"
        content="/static/mstile-144x144.png"
      />
      <meta name="msapplication-config" content="/static/browserconfig.xml" />
      <meta name="theme-color" content="#ff3200" />

      <link rel="manifest" href="/static/manifest.json" />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/static/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link rel="shortcut icon" href="/static/favicon.ico" />

      <link rel="stylesheet" href="https://use.typekit.net/vnc0psu.css" />
    </Head>

    <Header />
    <hr />

    <main>
      <MDXProvider>
        <Component {...pageProps} />
      </MDXProvider>
    </main>

    <hr />
    <Footer />

    <style jsx global>{`
      html,
      #__next {
        // CSS reset.
        margin: 0 0 0 0;
        padding: 0 0 0 0;
      }
      body {
        // Keeps the body centered, regardless of size.
        margin: 0 auto 0 auto;

        // Keeps the body flush inside the root.
        padding: 0 0 0 0;

        // Root scaling factor
        font-size: 12pt;
        max-width: 32em;

        font-family: Rooney, serif;
        background-color: #dae1e5;
      }
      main {
        margin: 0em 2em 0em 2em;
      }

      h3 {
        font-weight: 600;
      }
      a {
        font-weight: 600;
        color: #ff3200;
        margin: 0px;
      }

      hr {
        margin-top: 1em;
        margin-bottom: 1em;
        height: 1px;
        border-style: none;
        background-color: rgba(0, 0, 0, 0.1);
      }
    `}</style>
  </>
);
