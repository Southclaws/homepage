import * as React from 'react';

function SouthclawsSolidLight(props) {
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
          {'.cls-1{fill:#dae1e5;}.cls-2{fill:#333;}.cls-3{fill:#ff3200;}'}
        </style>
      </defs>
      <title>{'southclaws-solid-light'}</title>
      <g id="solid-light">
        <rect id="bg" className="cls-1" width={500} height={500} />
        <path
          id="outer"
          className="cls-2"
          d="M250,485.84s-46.91-175.1-50.53-188.53L142.17,315l30.06-86.27L108.18,65,250,168.05,391.82,65,327.77,228.77,357.83,315l-57.3-17.73Z"
        />
        <polygon
          id="eye"
          className="cls-3"
          points="295.14 228.06 250 258.29 204.86 228.06 295.14 228.06"
        />
      </g>
    </svg>
  );
}

export default SouthclawsSolidLight;
