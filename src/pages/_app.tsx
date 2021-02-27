import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import type { AppProps /*, AppContext */ } from 'next/app';
import {
  DefaultSeo,
  DefaultSeoProps,
  LogoJsonLd,
  SocialProfileJsonLd,
} from 'next-seo';
import { MDXProvider } from '@mdx-js/react';

import 'normalize.css';
import 'tachyons';

import { Socials } from '../Links';
import { SouthclawsExtraRainbowTrans } from '../branding';

const YEAR = new Date().getFullYear();
const SEO: DefaultSeoProps = {
  title: 'Homepage, Work and Social Links',
  titleTemplate: '%s | Southclaws',
  description:
    'Homepage, work and social links for Barnaby "Southclaws" Keene.',
  canonical: 'https://www.southcla.ws',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.southcla.ws',
    profile: {
      firstName: 'Barnaby',
      lastName: 'Keene',
      username: 'Southclaws',
    },
    images: [
      {
        url: 'https://www.southcla.ws/static/2019.webp',
        width: 100,
        height: 100,
        alt: 'Photograph of Barnaby "Southclaws" Keene (2019)',
      },
      {
        url: 'https://www.southcla.ws/static/southclaws-bold-light-0500.png',
        width: 500,
        height: 500,
        alt: 'Southclaws Logo (Light)',
      },
    ],
  },
  twitter: {
    handle: '@Southclaws',
    site: '@Southclaws',
    cardType: 'summary_large_image',
  },
};

const Header = () => (
  <header>
    <picture>
      <source srcSet="/static/2019.webp" />
      <img
        src="/static/2019.jpg"
        alt="A photograph of Barnaby Keene (Southclaws) standing before a mountain."
      />
    </picture>

    <br />
    <Link href="/">
      <a>
        <SouthclawsExtraRainbowTrans width={64} height={64} tabIndex={0} />
      </a>
    </Link>
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
    <p>
      {YEAR} &copy; Barnaby &quot;Southclaws&quot; Keene All Rights Reserved
    </p>

    <style jsx>{`
      footer {
        font-size: smaller;
        text-align: center;
        color: hsl(0, 0%, 20%);
        margin: 0.5em;
      }
    `}</style>
  </footer>
);

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <DefaultSeo {...SEO} />

    <LogoJsonLd
      logo="https://www.southcla.ws/static/2019.jpg"
      url="https://www.southcla.ws"
    />

    <SocialProfileJsonLd
      type="Person"
      name="Barnaby Keene"
      url="http://www.southcla.ws"
      sameAs={[
        'https://www.instagram.com/Southclaws',
        'https://twitter.com/Southclaws',
        'https://www.linkedin.com/in/Southclaws/',
        'https://www.facebook.com/Southclaws',
      ]}
    />

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
        content="https://www.southcla.ws/static/mstile-144x144.png"
      />
      <meta
        name="msapplication-config"
        content="https://www.southcla.ws/static/browserconfig.xml"
      />
      <meta name="theme-color" content="#ff3200" />

      <link
        rel="manifest"
        href="https://www.southcla.ws/static/manifest.json"
      />
      <link
        rel="shortcut icon"
        href="https://www.southcla.ws/static/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://www.southcla.ws/static/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://www.southcla.ws/static/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://www.southcla.ws/static/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="https://www.southcla.ws/static/site.webmanifest"
      />
      <link
        rel="mask-icon"
        href="https://www.southcla.ws/static/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <link
        rel="shortcut icon"
        href="https://www.southcla.ws/static/favicon.ico"
      />

      <link rel="stylesheet" href="https://use.typekit.net/vnc0psu.css" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>

    <div id="container">
      <Header />
      <hr />

      <main>
        <MDXProvider components={{ a: (props) => <Link {...props} /> }}>
          <Component {...pageProps} />
        </MDXProvider>
      </main>
    </div>

    <Footer />

    <style jsx global>{`
      html,
      body,
      #__next {
        height: 100%;
        background-color: #dae1e5;
      }
      #__next {
        display: flex;
        flex-direction: column;
        font-family: Inter, sans-serif;
      }
      #container {
        flex: 1 0 auto;

        // Keeps the body centered, regardless of size.
        margin: 0 auto 0 auto;

        // Keeps the body flush inside the root.
        padding: 0 0 0 0;

        // Root scaling factor
        font-size: 12pt;
        max-width: 42em;
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

export default App;
