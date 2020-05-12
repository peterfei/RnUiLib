/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconjietu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M781.963636 193.473939L204.179394 771.165091V193.473939H781.963636zM248.087273 815.041939L826.088727 237.102545v577.939394H248.087273zM50.579394 193.691152c0.310303 0 0.558545-0.217212 0.868848-0.217213H142.118788v652.598303c0 0.434424-0.186182 0.806788-0.155152 1.241213 0.682667 17.221818 15.173818 30.72 32.426667 30.006303 0.310303 0 0.558545-0.186182 0.868849-0.217213h650.798545v93.09091c0 0.434424-0.186182 0.806788-0.155152 1.241212a31.123394 31.123394 0 1 0 62.184728-1.210182v-0.248243c0-0.310303 0.217212-0.620606 0.186182-0.992969 0-0.248242-0.124121-0.403394-0.155152-0.620606v-91.229091h92.718545c0.434424 0 0.837818 0.217212 1.303273 0.186182a31.278545 31.278545 0 1 0-2.451394-62.495031c-0.310303 0.03103-0.558545 0.217212-0.868848 0.217212h-90.701576V175.041939l83.471515-83.471515a30.937212 30.937212 0 0 0 9.309091-23.210666 31.247515 31.247515 0 0 0-32.426667-30.006303 30.906182 30.906182 0 0 0-22.155636 10.736484L844.024242 131.413333H204.179394v-93.090909c0-0.434424 0.217212-0.775758 0.217212-1.210182a31.123394 31.123394 0 0 0-62.215758 1.210182H142.118788v0.217212c0 0.341333-0.155152 0.651636-0.155152 0.99297 0 0.248242 0.155152 0.434424 0.155152 0.682667v91.229091H49.493333c-0.465455 0-0.868848-0.279273-1.334303-0.248243a31.247515 31.247515 0 1 0 2.420364 62.495031z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjietu.defaultProps = {
  size: 18,
};

export default Iconjietu;