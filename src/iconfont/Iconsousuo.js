/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconsousuo = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1021.457 895.563 848.093 718.508c113.345-177.9 92.485-416.709-62.85-572.064-179.695-179.66-470.886-179.66-650.558 0-179.58 179.62-179.58 470.909 0 650.473 159.917 159.9 408.149 177.335 587.504 52.57l170.815 174.51L1021.457 895.563zM222.474 709.233c-131.197-131.17-131.197-343.817 0-475.014 131.155-131.155 343.869-131.155 474.964 0 131.21 131.197 131.21 343.844 0 475.014C566.324 840.388 353.629 840.388 222.474 709.233z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsousuo.defaultProps = {
  size: 18,
};

export default Iconsousuo;
