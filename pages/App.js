import * as React from "react";

import JsonLD from "./components/JsonLD";
import Header from "./components/Header";
import About from "./components/About";
import Socials from "./components/Socials";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import { ld, portfolio } from "./Data";

import "./App.css";
import "./components/css/Layout.css";

export default function App() {
    return (
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
    );
}
