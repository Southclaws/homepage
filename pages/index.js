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

            <link rel="apple-touch-icon" sizes="57x57" href="/static/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/static/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/static/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/static/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/static/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/static/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/static/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/static/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-icon-180x180.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
            <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#ff3200" />
            <link rel="icon" type="image/png" sizes="192x192" href="/static/android-icon-192x192.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />

            <link type="text/css" rel="stylesheet" href="/static/index.css" />
            <link rel="stylesheet" href="/static/font-awesome-4.7.0/css/font-awesome.min.css" />
            <link href="https://fonts.googleapis.com/css?family=Changa+One" rel="stylesheet" />

            <title>Barnaby &quot;Southclaws&quot; Keene - Homepage, Work and Social Links</title>
        </Head>
        <App />
    </div>
);
