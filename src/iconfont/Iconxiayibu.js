/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconxiayibu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.997 0C229.671 0 0 229.671 0 511.997c0 282.333 229.671 512.004 511.997 512.004 282.333 0 512.004-229.671 512.004-512.004C1024.001 229.671 794.33 0 511.997 0z m171.156 539.391L500.006 720.53c-7.132 7.02-16.423 10.57-25.709 10.57-9.437 0-18.873-3.623-26.004-10.86-14.192-14.376-14.08-37.489 0.29-51.713L605.626 513.21l-155.76-156.2c-14.263-14.298-14.23-37.45 0.073-51.713 14.297-14.297 37.45-14.225 51.712 0.078l181.613 182.12c0.035 0.039 0.035 0.079 0.073 0.112 0.039 0.04 0.073 0.04 0.112 0.073 3.365 3.404 5.775 7.354 7.534 11.484 0.071 0.146 0.256 0.296 0.29 0.441 5.413 13.276 2.706 29.073-8.12 39.787z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconxiayibu.defaultProps = {
  size: 18,
};

export default Iconxiayibu;
