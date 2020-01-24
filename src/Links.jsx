import React from 'react';

import Github from '../src/icons/Github';
import Instagram from '../src/icons/Instagram';
import Twitter from '../src/icons/Twitter';
import Vimeo from '../src/icons/Vimeo';
import Behance from '../src/icons/Behance';

export const Socials = () => (
  <span>
    <IconLink label="https://twitter.com/Southclaws" url="http://j.mp/SCINSTA">
      <Instagram width={24} height={24} />
    </IconLink>
    <IconLink
      label="https://twitter.com/Southclaws"
      url="http://bit.ly/SCTWITTER"
    >
      <Twitter width={24} height={24} />
    </IconLink>
  </span>
);

export const Links = () => (
  <div>
    <IconLink
      label="https://behance.net/Southclaws"
      url="http://bit.ly/SCBEHANCE"
    >
      <Behance />
    </IconLink>
    <IconLink label="https://vimeo.com/Southclaws" url="http://bit.ly/SCVIMEO">
      <Vimeo />
    </IconLink>
    <IconLink
      label="https://github.com/Southclaws"
      url="http://bit.ly/SCGITHUB"
    >
      <Github />
    </IconLink>

    <style jsx>{`
      div {
        text-align: center;
        margin-top: 0px;
        margin-left: 0px;

        clear: both;
        left: 0%;
        right: 0%;
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
        margin: 0px 10px 0px 10px;
        color: #333333;
      }
      a:hover {
        opacity: 1;
      }
    `}</style>
  </label>
);
