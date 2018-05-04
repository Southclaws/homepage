import * as React from "react";

import Socials from "./Socials";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="aboutContent">
                {this.props.description.map((value, index, array) => {
                    return <p key={index}>{value}</p>;
                })}
                <Socials />
            </section>
        );
    }
}

export default About;
