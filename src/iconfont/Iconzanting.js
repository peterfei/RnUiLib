/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconzanting = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M790.48529745 14.17803986h-70.88376382c-39.16171139 0-70.88943515 31.74133499-70.88943517 70.90418063v850.64146242c0 39.16171139 31.72999232 70.88376383 70.88943517 70.8837638h70.88376382c39.15036872 0 70.89397224-31.7231867 70.89397224-70.8837638v-850.64713376c-0.00113425-39.15944284-31.74133499-70.90191211-70.89397224-70.9019121z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M294.28193669 14.17803986h-70.89397224c-39.16171139 0-70.88943515 31.74133499-70.88943515 70.90418063v850.64146242c0 39.16171139 31.72999232 70.88376383 70.88943515 70.8837638h70.89397224c39.13789178 0 70.88376383-31.7231867 70.88376382-70.8837638v-850.64713376c-0.00113425-39.15944284-31.74133499-70.90191211-70.88376382-70.9019121z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconzanting.defaultProps = {
  size: 18,
};

export default Iconzanting;