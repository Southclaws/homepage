import * as React from "react";

import Github from "./icons/Github";
import Twitter from "./icons/Twitter";
import Vimeo from "./icons/Vimeo";
import Behance from "./icons/Behance";

import css from "./css/Socials.css";

export default function Socials() {
    return (
        <div className={css.socials}>
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
}

const SocialButton = props => {
    return (
        <label title={props.label}>
            <a className={css.icon} href={props.url} rel="noopener" target="_blank">
                {props.children}
            </a>
        </label>
    );
};
