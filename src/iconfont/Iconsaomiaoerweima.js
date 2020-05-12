/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconsaomiaoerweima = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M199.123105 455.092919 0.021487 455.092919l0 113.77323 199.101617 0L199.123105 455.092919zM0.021487 1023.958044l398.206304 0L398.227792 625.75174 0.021487 625.75174 0.021487 1023.958044zM113.794717 739.52497l170.659845 0 0 170.658821L113.794717 910.183791 113.794717 739.52497zM398.227792 0 0.021487 0l0 398.205281 398.206304 0L398.227792 0zM284.454562 284.434098 113.794717 284.434098 113.794717 113.77323l170.659845 0L284.454562 284.434098zM739.545434 739.52497 853.318664 739.52497 853.318664 625.75174 625.772204 625.75174l0 227.54646 113.77323 0L739.545434 739.52497zM824.876891 568.866149l199.101617 0L1023.978509 455.092919 824.876891 455.092919 824.876891 568.866149zM910.205279 910.184815 625.772204 910.184815l0 113.77323 398.206304 0L1023.978509 625.75174 910.205279 625.75174 910.205279 910.184815zM625.772204 0l0 398.205281 398.206304 0L1023.978509 0 625.772204 0zM910.205279 284.434098 739.545434 284.434098 739.545434 113.77323l170.659845 0L910.205279 284.434098zM455.11236 455.092919 312.896334 455.092919l0 113.77323 142.215002 0 0 170.658821 113.77323 0L568.884566 284.434098 455.11236 284.434098 455.11236 455.092919zM455.11236 170.660868l113.77323 0L568.88559 0 455.11236 0 455.11236 170.660868zM455.11236 1023.958044l113.77323 0L568.88559 853.2982 455.11236 853.2982 455.11236 1023.958044z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconsaomiaoerweima.defaultProps = {
  size: 18,
};

export default Iconsaomiaoerweima;