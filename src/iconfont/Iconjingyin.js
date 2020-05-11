/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconjingyin = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1026 1024" width={size} height={size} {...rest}>
      <Path
        d="M213.07070771 311.25708183H108.32239454c-9.69379887 0-17.55129347 7.85749462-17.55129347 17.55129347v360.89847068c0 9.69379887 7.85749462 17.55129347 17.55129347 17.55129235h212.80943291c0 0.08446571 0.0405875 0.16454382 0.10969551 0.21500342l200.39189143 146.44031334a8.77564618 8.77564618 0 0 0 13.95327859-7.08523737V633.77306711l70.75365142 70.75365141v264.87753789c0 9.69379887-7.85749462 17.55129347-17.55129348 17.55129346a17.55129347 17.55129347 0 0 1-10.35635949-3.38081766L301.05972888 780.84522679a17.55129347 17.55129347 0 0 0-10.35635952-3.38191458H90.77110107c-38.77300052 0-70.20517388-31.43217225-70.20517278-70.20517388V311.25708183c0-38.77300052 31.43217225-70.20517388 70.20517278-70.20517388h52.09443278l70.20517386 70.20517388zM535.58669298 435.2021222V172.75872883a8.77564618 8.77564618 0 0 0-13.95327859-7.08523736l-147.66561232 107.90973983-49.64822127-49.64822128L578.43378833 38.20832052c7.82568341-5.72062434 18.80621098-4.01266401 24.52573842 3.8130183A17.55129347 17.55129347 0 0 1 606.3403444 52.37550453v453.58026909l-70.75365142-70.75365142z m370.1501957 370.1501957l-47.82837164-47.82727475C908.8566309 688.73494299 934.3301394 606.52797477 934.3301394 510.90304382c0-152.4944129-64.78072686-270.86252944-194.34327746-355.10654342A52.6538804 52.6538804 0 0 1 716.03592776 111.65499806V108.32025239c0-15.42758711 12.50639366-27.93398079 27.93398078-27.93398078 4.79150268 0 9.50073454 1.2318815 13.67903927 3.57827069C922.23839486 176.3962343 1004.53531327 318.70979942 1004.53531327 510.90304382c0 125.70455722-44.61977607 223.17566452-98.79842459 294.44927408z m-99.06169385 99.50925108C759.49841485 941.17519518 721.13677275 957.83685759 716.03592776 956.26711327c-14.26042603-4.38782364-21.93911711-17.88147689-21.93911601-38.39345439 0-12.20582765 5.82702916-23.37283814 17.47999057-33.50103031a50.45996803 50.45996803 0 0 1 7.41542187-5.34546582c13.13275553-7.76644751 25.6665728-15.85101144 37.59816114-24.2504033l50.0848095 50.08480953z m0.55396314-198.01698287l-52.48604587-52.4860459C779.63304001 612.33306593 793.91979274 563.28597672 793.91979274 510.90304382c0-97.16505677-49.15568783-182.84937427-123.95600936-233.54189723-17.55129347-12.17621025-37.29649819-34.11532627-32.90867568-52.76357592s19.74520473-32.90867458 32.90867568-28.48465212C785.11452805 254.01024757 864.12496553 373.22960146 864.12496553 510.90304382c0 74.38128481-20.18069607 141.14530711-56.89580756 195.94154229zM705.57096964 803.75734377A355.37420022 355.37420022 0 0 1 679.83638575 818.05067789c-15.35738221 5.38056882-27.42389584 5.48477874-40.58736677-16.4543373-10.73810053-17.89683459-1.76719624-32.87357267 16.7889094-47.37203809l49.53304126 49.53194437zM49.00889601 49.00785077c13.70865667-13.70865667 35.93407901-13.70865667 49.64273566 0L979.03108938 929.38621048c13.70865667 13.70865667 13.70865667 35.93407901 0 49.64273677s-35.93407901 13.70865667-49.64273566 0L49.0099929 98.64948955c-13.70865667-13.70865667-13.70865667-35.93407901 0-49.64273679z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconjingyin.defaultProps = {
  size: 18,
};

export default Iconjingyin;
