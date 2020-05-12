/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconlaba = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M513.78647094 955.93802686c-8.03911919 0-15.18500293-2.67970639-21.43765121-8.0391192 0 0-45.55500879-41.08883146-97.36266585-84.85736931-87.53707571-72.3520728-115.22737518-86.64384025-121.48002344-88.4303112H43.94461554c-14.29176747 0-25.90382852-11.61206106-25.90382853-26.79706399V276.18583684c0-14.29176747 11.61206106-26.79706398 25.90382853-26.79706399H251.17524376c7.14588372-2.67970639 36.62265413-15.18500293 134.87855545-89.32354666 57.16706985-42.87530239 108.97472693-84.85736933 108.97472693-84.85736933 5.35941281-4.46617733 12.50529654-7.14588372 19.65118025-7.14588372 4.46617733 0 9.82559014 0.89323546 14.29176747 3.57294186 10.71882561 5.35941281 17.86470933 16.97147386 17.86470935 29.47677039v821.77662922c0 12.50529654-7.14588372 25.01059306-18.75794482 30.37000586-5.35941281 1.78647094-9.82559014 2.67970639-14.29176745 2.67970639zM275.29260137 721.01709916c18.7579448 0 47.34147971 8.03911919 164.35532583 104.50854959 16.07823839 13.39853199 33.04971226 27.69029947 50.91442161 42.8753024l5.3594128 4.46617733V146.66669419l-5.3594128 3.57294185c-22.33088667 16.97147386-43.76853786 33.94294773-64.3129536 49.12795068C297.62348804 295.8370171 269.03995309 302.98290084 250.2820083 302.98290084H90.3928598c-19.65118027 0-21.43765119 12.50529654-21.4376512 25.90382853V690.6470933c0 23.22412213 6.25264826 29.4767704 27.69029947 29.4767704h176.86062237l1.78647093 0.89323546z m510.93068687 158.99591305c-14.29176747 0-25.90382852-11.61206106-25.90382854-26.79706399 0-11.61206106 8.03911919-19.65118027 16.07823839-24.11735759 110.76119785-66.09942453 178.6470933-187.57944798 178.64709331-317.99182609 0-130.41237811-68.77913093-251.89240156-178.64709331-317.99182609-9.82559014-5.35941281-15.18500293-14.29176747-15.18500293-24.1173576 0-14.29176747 11.61206106-26.79706398 25.90382852-26.79706399 5.35941281 0 9.82559014 1.78647094 16.07823843 5.35941281 125.94620079 75.03177918 203.65768637 214.37651196 203.65768635 362.65359939 0 149.17032291-78.60472106 287.62182023-204.55092184 362.65359942-6.25264826 5.35941281-10.71882561 7.14588372-16.07823838 7.14588373z m-88.43031121-150.06355837c-14.29176747 0-25.90382852-11.61206106-25.90382852-26.797064 0-9.82559014 4.46617733-17.86470933 12.50529653-23.22412214 60.74001172-33.94294773 98.25590132-98.25590132 98.25590132-167.9282677 0-68.77913093-36.62265413-132.19884905-94.68295945-167.03503224-8.03911919-4.46617733-12.50529654-13.39853199-12.50529654-23.22412212 0-14.29176747 11.61206106-26.79706398 25.90382854-26.797064 4.46617733 0 11.61206106 2.67970639 15.18500291 4.46617733 73.24530826 43.76853786 119.69355252 125.0529653 119.69355252 211.69680557 0 88.43031118-47.34147971 170.60797413-123.26649436 214.37651196-1.78647094 0-8.93235466 4.46617733-15.18500295 4.46617734z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconlaba.defaultProps = {
  size: 18,
};

export default Iconlaba;