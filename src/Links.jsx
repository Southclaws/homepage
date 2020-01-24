import React from 'react';

import Github from '../src/icons/Github';
import Mail from '../src/icons/Mail';
import Instagram from '../src/icons/Instagram';
import Twitter from '../src/icons/Twitter';
import Vimeo from '../src/icons/Vimeo';
import Behance from '../src/icons/Behance';

export const Socials = () => (
  <span>
    <IconLink url="mailto:south@cla.ws">
      <Mail width="2em" height="1em" />
    </IconLink>
    <IconLink label="https://twitter.com/Southclaws" url="http://j.mp/SCINSTA">
      <Instagram width="2em" height="1em" />
    </IconLink>
    <IconLink
      label="https://twitter.com/Southclaws"
      url="http://bit.ly/SCTWITTER"
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
      label="https://behance.net/Southclaws"
      url="http://bit.ly/SCBEHANCE"
    >
      <Behance height="4em" width="3em" />
    </IconLink>
    <IconLink label="https://vimeo.com/Southclaws" url="http://bit.ly/SCVIMEO">
      <Vimeo height="4em" width="3em" />
    </IconLink>
    <IconLink
      label="https://github.com/Southclaws"
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
  <label title={label}>
    <a href={url} rel="noopener" target="_blank">
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
  </label>
);
