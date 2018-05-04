import * as React from "react";
import FontAwesome from "react-fontawesome";

const SocialButton = props => {
    return (
        <label title={props.label}>
            <a className="social-icon" href={props.url} rel="noopener" target="_blank">
                <FontAwesome name={props.icon} size="4x" />
            </a>
        </label>
    );
};

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="aboutSocial">
                <p>My work and socials:</p>
                <SocialButton label="https://github.com/Southclaws" url="http://bit.ly/SCGITHUB" icon="github" />
                <SocialButton label="https://twitter.com/Southclaws" url="http://bit.ly/SCTWITTER" icon="twitter" />
                <SocialButton label="https://vimeo.com/Southclaws" url="http://bit.ly/SCVIMEO" icon="vimeo" />
                <SocialButton label="https://behance.net/Southclaws" url="http://bit.ly/SCBEHANCE" icon="behance" />
            </div>
        );
    }
}

export default About;
