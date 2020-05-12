/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Icontaolunqu = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M877.714286 877.714286H512l-146.285714 146.285714H292.571429v-146.285714H146.285714a146.285714 146.285714 0 0 1-146.285714-146.285715V146.285714a146.285714 146.285714 0 0 1 146.285714-146.285714h731.428572a146.285714 146.285714 0 0 1 146.285714 146.285714v585.142857a146.285714 146.285714 0 0 1-146.285714 146.285715z m73.142857-731.428572a73.142857 73.142857 0 0 0-73.142857-73.142857H146.285714a73.142857 73.142857 0 0 0-73.142857 73.142857v585.142857a73.142857 73.142857 0 0 0 73.142857 73.142858h219.428572v116.004571l103.424-103.424 42.861714 42.788571V804.571429h365.714286a73.142857 73.142857 0 0 0 73.142857-73.142858V146.285714z m-219.428572 365.714286a73.142857 73.142857 0 1 1 73.142858-73.142857 73.142857 73.142857 0 0 1-73.142858 73.142857zM512 512a73.142857 73.142857 0 1 1 73.142857-73.142857 73.142857 73.142857 0 0 1-73.142857 73.142857zM292.571429 512a73.142857 73.142857 0 1 1 73.142857-73.142857 73.142857 73.142857 0 0 1-73.142857 73.142857z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icontaolunqu.defaultProps = {
  size: 18,
};

export default Icontaolunqu;