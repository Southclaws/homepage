import * as React from "react";

import Github from "./icons/Github";
import Twitter from "./icons/Twitter";
import Vimeo from "./icons/Vimeo";
import Behance from "./icons/Behance";

const SocialButton = props => {
    return (
        <label title={props.label}>
            <a className="social-icon" href={props.url} rel="noopener" target="_blank">
                {props.children}
            </a>
        </label>
    );
};

const Socials = () => {
    return (
        <div className="aboutSocial">
            <p>My work and socials:</p>
            <SocialButton label="https://github.com/Southclaws" url="http://bit.ly/SCGITHUB">
                <Github />
            </SocialButton>
            <SocialButton label="https://twitter.com/Southclaws" url="http://bit.ly/SCTWITTER">
                <Twitter />
            </SocialButton>
            <SocialButton label="https://vimeo.com/Southclaws" url="http://bit.ly/SCVIMEO">
                <Vimeo />
            </SocialButton>
            <SocialButton label="https://behance.net/Southclaws" url="http://bit.ly/SCBEHANCE">
                <Behance />
            </SocialButton>
        </div>
    );
};

export default Socials;
