import * as React from 'react';

function SouthclawsOutlineColoured(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <style>
          {
            '.cls-1{fill:#ff3200;}.cls-2{fill:none;stroke:#dae1e5;stroke-miterlimit:10;stroke-width:4px;}'
          }
        </style>
      </defs>
      <title>{'southclaws-outline-coloured'}</title>
      <g id="outline-coloured">
        <rect id="bg" className="cls-1" width={500} height={500} />
        <path
          id="outer"
          className="cls-2"
          d="M250,485.84s-46.91-175.1-50.53-188.53L142.17,315l30.06-86.27L108.18,65,250,168.05,391.82,65,327.77,228.77,357.84,315l-57.31-17.73Z"
        />
        <polygon
          id="inner"
          className="cls-2"
          points="250 391.55 286.46 274.23 327.29 286.86 312.48 229.77 340.73 132.45 250 192.61 159.28 132.45 187.53 229.77 172.72 286.86 213.55 274.23 250 391.55"
        />
        <polygon
          id="eye"
          className="cls-2"
          points="295.15 228.06 250 258.29 204.86 228.06 295.15 228.06"
        />
      </g>
    </svg>
  );
}

export default SouthclawsOutlineColoured;
