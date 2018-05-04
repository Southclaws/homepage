import * as React from "react";

import PortfolioItem from "./PortfolioItem";

class Portfolio extends React.Component {
    render() {
        return (
            <section className="mainContent">
                <h2>Recent work</h2>
                {this.props.items.map((value, index, array) => {
                    return <PortfolioItem key={index} data={value} />;
                })}
            </section>
        );
    }
}

export default Portfolio;
