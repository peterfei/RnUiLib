/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconweibo1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832.90000001 433.70000001c13.4 0 24.50000001-9.70000001 26.49999999-22.4 0.2-0.99999999 0.30000001-1.8 0.29999998-2.80000004 20.09999999-178.4-148.2-147.6-148.19999999-147.59999998-14.90000002 0-26.89999998 11.80000002-26.89999999 26.90000001 0 14.70000001 11.99999999 26.50000001 26.89999999 26.50000001 120.8-26.4 94.30000001 92.89999997 94.30000001 92.89999999-0.10000001 14.70000001 12.10000001 26.50000001 27.10000001 26.50000001z m-19.60000002-311.30000001c-58.10000001-13.49999999-118.10000001-1.8-134.89999999 1.30000001-1.4 0.2-2.50000001 1.30000001-3.70000001 1.49999999-0.50000001 0.2-0.99999999 0.70000001-1 0.69999999-16.6 4.70000001-28.6 19.70000001-28.59999998 37.50000001 0 21.19999999 17.4 38.69999999 39.19999998 38.69999999 0 0 21.10000001-2.8 35.50000001-8.29999999 14.20000001-5.70000002 134.90000001-4.20000001 194.69999999 94.90000001 32.60000003 72.4 14.40000001 120.8 12 128.59999998 0 0-7.8 18.90000001-7.8 37.4 0 21.39999999 17.4 34.90000001 39.19999998 34.9 18.10000001 0 33.30000001-2.50000001 37.70000003-32.7h0.2c64.6-211.4-78.40000001-310.70000001-182.50000001-334.49999999z"
        fill={getIconColor(color, 0, '#FFA439')}
      />
      <Path
        d="M403.89999998 849.8c-163.8 7.50000002-296.20000001-73.40000001-296.2-181.2 0-107.90000001 132.50000001-194.40000001 296.2-201.90000001 163.89999999-7.50000002 296.6 59.20000002 296.60000003 166.80000002 0 107.70000001-132.70000002 208.99999999-296.60000003 216.29999999z m348.80000003-350.2c-38.90000001-7.50000002-19.90000002-28-19.90000002-28s38-61.89999999-7.59999999-106.90000001c-56.4-55.70000001-193.79999999 7-193.80000001 7.00000002-52.4 16-38.50000001-7.30000001-31.1-47.10000001 0-46.90000001-16.2-126.10000001-155.99999998-79.4C204.6 292.4 84.79999999 457.4 84.79999999 457.4 1.49999999 567.00000003 12.49999998 651.80000001 12.49999998 651.80000001 33.29999999 839 234.89999999 890.40000001 391.69999999 902.59999998c164.90000001 12.70000001 387.70000001-56.10000001 455.10000001-197.49999999 67.6-141.79999998-55.10000001-197.80000001-94.10000001-205.49999999z"
        fill={getIconColor(color, 1, '#FF000E')}
      />
      <Path
        d="M426.89999999 669.79999999c-10.50000001 7.70000001-23.30000002 6.70000001-28.69999999-2.7-5.70000002-9-3.50000001-23.4 6.90000001-30.90000001 12.2-9 24.8-6.30000001 30.4 2.70000003 5.4 9 1.50000001 22.90000001-8.6 30.89999998z m-97.2 81.60000001c-30.8 3.50000001-55.60000001-14-55.59999998-39.39999999 0-25.2 22-51.70000001 52.69999999-54.90000004 35.30000001-3.30000003 58.30000001 16.70000001 58.30000002 42.20000002 0.2 25.2-24.8 48.6-55.39999999 52.10000001z m41.50000001-213.79999997c-164.80000001 19-145.70000001 171.20000001-145.70000001 171.19999998s-1.70000001 48.2 44.10000001 72.69999997c96.30000001 51.59999999 195.70000001 20.30000002 245.70000003-43.49999998 50.30000001-63.70000001 20.90000001-219.20000001-144.10000003-200.40000001z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

Iconweibo1.defaultProps = {
  size: 18,
};

export default Iconweibo1;