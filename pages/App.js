import * as React from "react";

import JsonLD from "./components/JsonLD";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import DefaultData from "./Default";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = DefaultData;
    }

    async componentDidMount() {
        let data = undefined;

        try {
            data = await this.getPortfolioData();
            this.setState({
                ld: data.ld,
                portfolio: data.portfolio
            });
        } catch (e) {
            console.log(
                "could not get portfolio JSON data from GitHub Gist:",
                e,
                "using hard-coded default instead (may be outdated)"
            );
        }
    }

    async getPortfolioData() {
        let response = await fetch("https://api.github.com/gists/f008b76671d2e961027281aa6511fb1a");
        if (response.status !== 200) {
            throw "failed to fetch portfolio data";
        }

        let payload = await response.json();

        return await JSON.parse(payload.files.homepage.content);
    }

    render() {
        return (
            <div>
                <JsonLD data={this.state.ld} />
                <Header image={this.state.ld.image} />
                <hr />
                <About description={this.state.ld.description} />
                <hr />
                <Portfolio items={this.state.portfolio} />
                <hr />
                <Footer />
            </div>
        );
    }
}

export default App;
