/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconyulan = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.63996911 768.03238171c-274.13870714 0-496.68281187-287.88897567-496.68281187-297.65365973 0-10.82661496 222.54410474-298.71559062 496.68281187-298.71559066 275.3517698 0 501.63135718 300.35262322 497.90122402 298.71559066C1006.80035967 467.68243392 787.99173895 768.03238171 512.63996911 768.03238171L512.63996911 768.03238171zM510.75952132 267.07375917c-116.25336441 0-210.09918236 88.38503035-210.09918237 198.42997713 0 108.98836536 93.84581662 197.88296258 210.09918237 197.88296259 116.85387775 0 211.34166785-88.88924772 211.34166781-197.88296259C722.10119043 355.45745246 627.61339905 267.07375917 510.75952132 267.07375917L510.75952132 267.07375917zM510.15365978 552.25708488c-55.33142347 0-100.10505763-42.27528883-100.10505762-93.79365619 0-51.51703035 44.77363549-93.25867897 100.10505762-93.25867898 55.2953115 0 99.43098594 41.74298565 99.43098592 93.25867898C609.5846457 509.98045902 565.44897127 552.25708488 510.15365978 552.25708488L510.15365978 552.25708488z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconyulan.defaultProps = {
  size: 18,
};

export default Iconyulan;