import React from "react";

function SouthclawsMinimalLight(props) {
  return (
    <svg viewBox="0 0 500 500" width="1em" height="1em" {...props}>
      <defs>
        <style>
          {
            ".cls-1{fill:#dae1e5;}.cls-2{fill:none;stroke:#333;stroke-width:4px;}"
          }
        </style>
      </defs>
      <title>{"southclaws-minimal-light"}</title>
      <g id="minimal-light">
        <rect id="bg" className="cls-1" width={500} height={500} />
        <path
          id="outer"
          className="cls-2"
          d="M250,485.84s-46.92-175.1-50.53-188.53L142.17,315l30.06-86.27L108.18,65,250,168.05,391.82,65,327.77,228.77,357.83,315l-57.3-17.73Z"
        />
      </g>
    </svg>
  );
}

export default SouthclawsMinimalLight;
