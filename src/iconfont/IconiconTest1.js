/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconiconTest1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.74515835 4.22171675c51.3250215 0 94.54609271 41.87041282 94.5460927 94.54609271 0 51.3250215-41.87041282 94.54609271-94.5460927 94.54609269-51.3250215 0-94.54609271-41.87041282-94.54609272-94.5460927C417.19906563 47.44278792 459.06947847 4.22171675 511.74515835 4.22171675z m0 407.89885721c51.3250215 0 94.54609271 41.87041282 94.5460927 94.54609271 0 51.3250215-41.87041282 94.54609271-94.5460927 94.54609271-51.3250215 0-94.54609271-41.87041282-94.54609272-94.54609271 0-51.3250215 41.87041282-94.54609271 94.54609272-94.54609271z m0 407.89885723c51.3250215 0 94.54609271 41.87041282 94.5460927 94.5460927 0 51.3250215-41.87041282 94.54609271-94.5460927 94.5460927-51.3250215 0-94.54609271-41.87041282-94.54609272-94.54609271 0-51.3250215 41.87041282-94.54609271 94.54609272-94.54609269z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconiconTest1.defaultProps = {
  size: 18,
};

export default IconiconTest1;