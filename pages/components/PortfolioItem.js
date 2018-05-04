import * as React from "react";

import JsonLD from "./JsonLD";

class PortfolioItem extends React.Component {
    render() {
        return (
            <div className="sample">
                <h3>{this.props.data.name}</h3>
                <a href={this.props.data.url} target="_blank" rel="nofollow">
                    <div className="sampleContent">
                        <img src={this.props.data.image} />
                        <div className="sampleDesc">
                            <p>{this.props.data.about}</p>
                        </div>
                    </div>
                    <JsonLD data={this.props.data} />
                </a>
            </div>
        );
    }
}

export default PortfolioItem;
