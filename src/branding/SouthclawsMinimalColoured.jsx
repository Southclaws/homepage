import React from 'react';

function SouthclawsMinimalColoured(props) {
  return (
    <svg viewBox="0 0 500 500" width="1em" height="1em" {...props}>
      <defs>
        <style>
          {
            '.cls-1{fill:#ff3200;}.cls-2{fill:none;stroke:#dae1e5;stroke-width:4px;}'
          }
        </style>
      </defs>
      <title>{'southclaws-minimal-coloured'}</title>
      <g id="minimal-coloured">
        <rect id="bg" className="cls-1" width={500} height={500} />
        <path
          id="outer"
          className="cls-2"
          d="M250,485.84s-46.91-175.1-50.53-188.53L142.17,315l30.06-86.27L108.18,65,250,168.05,391.82,65,327.77,228.77,357.84,315l-57.31-17.73Z"
        />
      </g>
    </svg>
  );
}

export default SouthclawsMinimalColoured;
