import React from "react";
import Head from "next/head";

import JsonLD from "./components/JsonLD";
import Header from "./components/Header";
import About from "./components/About";
import Socials from "./components/Socials";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

import { ld, portfolio } from "../data.js";
import "./index.css";

const USER = "Southclaws";
const NAME = "Barnaby Keene";
const HEAD = "Homepage, Work and Social Links";
const DESC = ld.description[0];

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

            <title>{[USER, NAME, HEAD].join(" - ")}</title>
            <meta name="description" content={[USER, NAME, HEAD, DESC].join(" - ")} />
            <meta property="og:image" content="https://www.southcla.ws/static/southclaws-bold-light-0100.png" />
            <meta property="og:site_name" content={[USER, NAME].join(" - ")} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Southclaws" />
            <meta property="og:url" content="https://www.southcla.ws" />
            <meta property="og:description" content={[USER, NAME, HEAD, DESC].join(" - ")} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@Southclaws" />
            <meta name="twitter:creator" content="@Southclaws" />
            <meta name="hostname" content="southcla.ws" />
            <meta name="expected-hostname" content="southcla.ws" />
            <JsonLD data={ld} />
        </Head>
        <div>
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
