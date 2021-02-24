import * as React from 'react';

function SouthclawsExtraRainbowTrans(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 500"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <style>
          {
            '.cls-1{fill:none;}.cls-2{fill:#750787;}.cls-3{fill:#004dff;}.cls-4{fill:#008026;}.cls-5{fill:#ffed00;}.cls-6{fill:#ff8c00;}.cls-7{fill:#e40303;}.cls-8{fill:url(#Rainbow);}.cls-9{fill:#333;}'
          }
        </style>
        <pattern
          id="Rainbow"
          data-name="Rainbow"
          width={495.73}
          height={306.24}
          patternTransform="translate(174.4 237.25) rotate(-45)"
          patternUnits="userSpaceOnUse"
          viewBox="0 0 495.73 306.24"
        >
          <rect className="cls-1" width={495.73} height={306.24} />
          <rect className="cls-2" width={495.73} height={306.24} />
          <rect className="cls-3" width={495.73} height={255.2} />
          <rect className="cls-4" width={495.73} height={204.16} />
          <rect className="cls-5" width={495.73} height={153.12} />
          <rect className="cls-6" width={495.73} height={102.08} />
          <rect className="cls-7" width={495.73} height={51.04} />
        </pattern>
      </defs>
      <title>{'southclaws-extra-rainbow-trans'}</title>
      <g id="extra-rainbow-trans">
        <path
          id="inner"
          className="cls-8"
          d="M250,485.84s-46.91-175.1-50.53-188.53L142.17,315l30.06-86.27L108.18,65,250,168.05,391.82,65,327.77,228.77,357.83,315l-57.3-17.73Z"
        />
        <path
          id="outline"
          className="cls-9"
          d="M250,485.84s-46.91-175.1-50.53-188.53L142.17,315l30.06-86.27L108.18,65,250,168.05,391.82,65,327.77,228.77,357.83,315l-57.3-17.73Zm0-94.29c2.58-12,36.46-117.32,36.46-117.32l40.83,12.63-14.81-57.09,28.25-97.32L250,192.61l-90.72-60.16,28.25,97.32-14.81,57.09,40.82-12.63S247.42,379.57,250,391.55Z"
        />
        <polygon
          id="eye"
          className="cls-9"
          points="295.14 228.06 250 258.29 204.86 228.06 295.14 228.06"
        />
      </g>
    </svg>
  );
}

export default SouthclawsExtraRainbowTrans;
