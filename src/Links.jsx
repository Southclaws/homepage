import React from 'react';

import Github from './icons/Github';
import Mail from './icons/Mail';
import Instagram from './icons/Instagram';
import Twitter from './icons/Twitter';
import Vimeo from './icons/Vimeo';
import Behance from './icons/Behance';

export const Socials = () => (
  <span>
    <IconLink url="mailto:south@cla.ws" label="Send mail to Barnaby">
      <Mail width="2em" height="1em" />
    </IconLink>
    <IconLink
      label="Barnaby's Instagram profile"
      url="https://www.instagram.com/Southclaws/"
    >
      <Instagram width="2em" height="1em" />
    </IconLink>
    <IconLink
      label="Barnaby's Twitter profile"
      url="https://twitter.com/Southclaws"
    >
      <Twitter width="2em" height="1em" />
    </IconLink>

    <style jsx>{`
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: larger;
        margin: 0.5em;
      }
    `}</style>
  </span>
);

export const Links = () => (
  <div>
    <IconLink
      label="Barnaby's design and branding work on Behance"
      url="http://bit.ly/SCBEHANCE"
    >
      <Behance height="4em" width="3em" />
    </IconLink>
    <IconLink
      label="Barnaby's video and motion graphics work on Vimeo"
      url="http://bit.ly/SCVIMEO"
    >
      <Vimeo height="4em" width="3em" />
    </IconLink>
    <IconLink
      label="Barnaby's software and web development work on GitHub"
      url="http://bit.ly/SCGITHUB"
    >
      <Github height="4em" width="3em" />
    </IconLink>

    <style jsx>{`
      div {
        display: flex;
        justify-content: space-evenly;
        margin-top: 0px;
        margin-left: 0px;
      }
    `}</style>
  </div>
);

export const IconLink = ({ label, url, children }) => (
  <>
    <a
      href={url}
      rel="noopener noreferrer"
      target="_blank"
      aria-label={label}
      title={label}
      tabIndex={0}
    >
      {children}
    </a>

    <style jsx>{`
      a {
        opacity: 0.2;
        color: #333333;
        align-items: center;
      }
      a:hover {
        opacity: 1;
      }
    `}</style>
  </>
);
