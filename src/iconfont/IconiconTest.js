/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconiconTest = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.2380854 9.55505008h1.50760865l1.0964438 0.1370556h0.27411022l1.09644284 0.13705561h0.41116581l0.95938822 0.13705461H516.99441074l0.1370556 0.13705559 0.95938723 0.1370556h0.2741112l0.13705462 0.13705559h0.13705561l0.8223326 0.13705461h0.27411023l0.27411119 0.13705562 0.68527604 0.13705559h0.2741112l0.4111658 0.1370556 0.68527701 0.13705461h0.27411021l0.41116681 0.13705561 0.5482214 0.13705559h0.27411024l0.41116678 0.1370556 0.54822141 0.13705463h0.27411023l0.41116579 0.13705559 0.54822144 0.1370556h0.2741112l0.54822141 0.13705559 0.54822142 0.27411023h0.2741102l0.68527701 0.27411119 0.2741112 0.13705461 1.23349841 0.4111668h0.13705463l3.56343969 1.37055305 0.27411023 0.13705561 0.9593882 0.41116581 0.54822142 0.27411119 2.87816265 1.50760866v0.13705558l2.19288566 1.23349842 0.13705559 0.13705464c3.42638407 2.19288567 6.71571257 4.65988251 9.59387525 7.53804517l2.19288565 2.32994125 0.54822141 0.54822142 0.54822143 0.54822142 266.70973014 267.25795156c20.69535912 20.69535912 20.69535912 54.68508875 0 75.51750343-20.69535912 20.69535912-54.54803316 20.69535912-75.38044784 0L565.51200832 192.66101117v768.46940404a53.45159031 53.45159031 0 0 1-53.31453568 53.31453471 53.45159031 53.45159031 0 0 1-53.3145347-53.31453471V192.79806676L279.88863794 372.06647697c-20.69535912 20.69535912-54.68508875 20.69535912-75.24339323-1e-8-20.69535912-20.69535912-20.69535912-54.68508875 1e-8-75.51750343l266.84678671-267.25795156 0.27411021-0.41116582 0.27411121-0.1370556 2.60405148-2.87816267c5.89338093-5.89338093 12.88320373-10.00504106 20.28419328-12.60909352l0.41116583-0.13705462 0.5482214-0.2741112h0.27411119l0.54822143-0.13705559 0.54822141-0.2741102h0.27411022l1.0964438-0.41116583h0.27411022l0.54822143-0.1370556 0.54822139-0.13705559h0.2741112l0.54822142-0.1370556 0.54822141-0.13705462h0.27411022l0.54822141-0.1370556 0.54822142-0.13705559h0.27411118l0.54822143-0.13705561 0.41116581-0.13705462h0.2741112l0.68527602-0.13705559 0.41116681-0.1370556h0.27411023l0.685277-0.13705561 0.27411022-0.13705461h0.2741112l0.82233163-0.13705559 0.2741112-0.1370556h0.2741112l0.95938722-0.13705559h0.41116581l0.95938723-0.13705461h0.4111668l1.09644282-0.13705562h1.64466425z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconiconTest.defaultProps = {
  size: 18,
};

export default IconiconTest;