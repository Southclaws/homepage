import React from "react";

function SouthclawsOutlineLight(props) {
  return (
    <svg viewBox="0 0 500 500" width="1em" height="1em" {...props}>
      <defs>
        <style>
          {
            ".cls-1{fill:#dae1e5;}.cls-2{fill:none;stroke:#333;stroke-miterlimit:10;stroke-width:4px;}"
          }
        </style>
      </defs>
      <title>{"southclaws-outline-light"}</title>
      <g id="outline-light">
        <rect id="bg" className="cls-1" width={500} height={500} />
        <path
          id="outer"
          className="cls-2"
          d="M250,485.84s-46.92-175.1-50.53-188.53L142.17,315l30.06-86.27L108.18,65,250,168.05,391.82,65,327.77,228.77,357.83,315l-57.3-17.73Z"
        />
        <polygon
          id="inner"
          className="cls-2"
          points="250 391.55 286.45 274.23 327.29 286.86 312.48 229.77 340.73 132.45 250 192.61 159.27 132.45 187.52 229.77 172.71 286.86 213.54 274.23 250 391.55"
        />
        <polygon
          id="eye"
          className="cls-2"
          points="295.14 228.06 250 258.29 204.86 228.06 295.14 228.06"
        />
      </g>
    </svg>
  );
}

export default SouthclawsOutlineLight;
