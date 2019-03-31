import React from "react";
import Head from "next/head";

import JsonLD from "./components/JsonLD";
import Header from "./components/Header";
import About from "./components/About";
import Socials from "./components/Socials";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import { ld, portfolio } from "./data";
import "./index.css";

export default () => (
    <div>
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="theme-color" content="#ff3200" />
            <meta name="msapplication-TileColor" content="#ff3200" />
            <meta name="msapplication-TileImage" content="/static/mstile-144x144.png" />
            <meta name="msapplication-config" content="/static/browserconfig.xml" />
            <meta name="theme-color" content="#ff3200" />

            <link rel="manifest" href="/static/manifest.json" />
            <link rel="shortcut icon" href="/static/favicon.ico" />

            <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
            <link rel="manifest" href="/static/site.webmanifest" />
            <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="shortcut icon" href="/static/favicon.ico" />

            <link rel="stylesheet" href="https://use.typekit.net/vnc0psu.css" />

            <title>Barnaby &quot;Southclaws&quot; Keene - Homepage, Work and Social Links</title>
            <meta name="description" content='Barnaby "Southclaws" Keene - Homepage, Work and Social Links' />
            <meta property="og:image" content="https://www.southcla.ws/static/southclaws-bold-light-0100.png" />
            <meta property="og:site_name" content='Barnaby "Southclaws" Keene' />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Southclaws" />
            <meta property="og:url" content="https://www.southcla.ws" />
            <meta property="og:description" content='Barnaby "Southclaws" Keene - Homepage, Work and Social Links' />
            <meta name="hostname" content="southcla.ws" />
            <meta name="expected-hostname" content="southcla.ws" />
        </Head>
        <div>
            <JsonLD data={ld} />
            <Header image={ld.image} />
            <hr />
            <About description={ld.description} />
            <hr />
            <Socials />
            <hr />
            <Portfolio items={portfolio} />
            <hr />
            <Footer />
        </div>
    </div>
);
