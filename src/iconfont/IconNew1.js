/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconNew1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 232.727273h512a256 256 0 0 1 256 256v46.545454a256 256 0 0 1-256 256H256A256 256 0 0 1 0 535.272727v-46.545454a256 256 0 0 1 256-256z m23.272727 46.545454h465.454546a232.727273 232.727273 0 0 1 0 465.454546H279.272727a232.727273 232.727273 0 0 1 0-465.454546z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
      <Path
        d="M46.545455 279.272727m232.727272 0l465.454546 0q232.727273 0 232.727272 232.727273l0 0q0 232.727273-232.727272 232.727273l-465.454546 0q-232.727273 0-232.727272-232.727273l0 0q0-232.727273 232.727272-232.727273Z"
        fill={getIconColor(color, 1, '#FF7247')}
      />
      <Path
        d="M351.813818 417.140364h-42.682182V537.6a200.424727 200.424727 0 0 0 1.373091 29.184h-0.674909q-1.908364-3.537455-10.496-16.779636l-86.109091-132.817455H164.049455V628.363636h42.682181v-120.133818a332.311273 332.311273 0 0 0-1.233454-33.675636h0.674909a159.627636 159.627636 0 0 0 10.100364 17.175273L305.733818 628.363636h46.103273v-211.223272z m169.890909 174.405818h-80.058182v-51.2h69.818182v-36.608h-69.818182v-49.780364h75.147637v-36.817454h-120.017455V628.363636h125.044364v-36.817454z m265.588364-174.405818l-30.673455 143.453091a130.327273 130.327273 0 0 0-3.141818 23.272727h-0.558545a147.246545 147.246545 0 0 0-3.397818-22.365091l-35.723637-144.290909h-47.895273l-39.26109 142.498909a123.997091 123.997091 0 0 0-4.235637 24.413091H621.381818a156.602182 156.602182 0 0 0-2.862545-23.738182l-31.371637-143.173818h-49.291636L594.176 628.363636h51.944727l36.817455-137.728a146.292364 146.292364 0 0 0 3.816727-23.272727h0.535273a114.432 114.432 0 0 0 3.397818 23.272727L726.737455 628.363636h50.036363l56.32-211.223272h-45.684363z"
        fill={getIconColor(color, 2, '#FFFFFF')}
      />
    </Svg>
  );
};

IconNew1.defaultProps = {
  size: 18,
};

export default IconNew1;
