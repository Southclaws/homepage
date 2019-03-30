import React from "react";
import ReactDOM from "react-dom";

import Head from "next/head";

import App from "./App";

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

            <link type="text/css" rel="stylesheet" href="/static/index.css" />
            <link href="https://fonts.googleapis.com/css?family=Changa+One" rel="stylesheet" />

            <title>Barnaby &quot;Southclaws&quot; Keene - Homepage, Work and Social Links</title>
        </Head>
        <App />
    </div>
);
