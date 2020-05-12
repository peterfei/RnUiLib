/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconshuaxin = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.501 81.821c-144.31 0-271.871 71.193-349.778 180.292-12.449 16.47-9.162 39.897 7.308 52.311 15.735 11.924 38.044 9.511 50.877-5.49l0.105 0.07c64.095-92.139 170.745-152.458 291.487-152.458 184.942 0 336.84 141.443 353.414 322.084l-45.562-65.074c-11.68-17.029-34.933-21.33-51.962-9.651-16.994 11.679-21.33 34.932-9.651 51.926 0.141 0.21 0.28 0.385 0.385 0.56L866.3 609.442c11.819 16.89 35.107 21.016 52.031 9.196v-0.035c8.638-6.049 14.407-15.07 15.945-24.722a434.408 434.408 0 0 0 7.903-82.383c0.001-237.287-192.355-429.677-429.678-429.677z m357.575 667.91c2.553-5.07 4.196-11.154 4.196-17.204 0-20.666-16.714-37.38-37.345-37.38-12.413 0-23.708 6.084-30.491 15.386C742.585 804.63 634.781 866.452 512.5 866.452c-184.942 0-336.805-141.442-353.415-322.084l45.563 65.074c11.679 17.029 34.932 21.33 51.926 9.651 17.029-11.68 21.365-34.933 9.686-51.927-0.14-0.21-0.28-0.385-0.42-0.56L158.7 413.554c-11.854-16.889-35.142-21.016-52.031-9.196-8.078 5.665-13.603 13.882-15.525 22.799a432.184 432.184 0 0 0-8.322 84.341c0 237.288 192.39 429.679 429.678 429.679 145.919 0 274.773-72.803 352.436-183.998a36.16 36.16 0 0 0 5.14-7.448c0.07-0.105-0.069 0.105 0 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconshuaxin.defaultProps = {
  size: 18,
};

export default Iconshuaxin;