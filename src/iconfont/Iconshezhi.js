/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconshezhi = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 743.82092902c-121.40236698 0-220.17920914-98.75320076-220.17920914-220.15556673s98.77684317-220.17920914 220.17920914-220.17920914c121.42600838 0 220.17920914 98.77684317 220.17920914 220.17920914S633.42600838 743.82092902 512 743.82092902z m0-393.02686273c-95.32509054 0-172.89493841 77.54620444-172.89493841 172.89493841 0 95.30144914 77.54620444 172.871296 172.89493841 172.87129499s172.89493841-77.54620444 172.89493841-172.87129499-77.56984686-172.89493841-172.89493841-172.89493841z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M610.04393651 1004.26269562h-196.11151543a23.64213537 23.64213537 0 0 1-23.64213537-23.64213536v-89.5091261a402.62556952 402.62556952 0 0 1-66.38711669-24.20954717l-61.020352 60.9967106a23.57120914 23.57120914 0 0 1-33.42998045 0L90.79171149 789.19018769a23.61849397 23.61849397 0 0 1 0-33.42997943L146.4925826 700.05933613a399.90672457 399.90672457 0 0 1-31.089408-71.65931276H38.02246502a23.64213537 23.64213537 0 0 1-23.64213639-23.64213638v-196.11151442a23.64213537 23.64213537 0 0 1 23.64213639-23.64213638h77.42799339a397.06966857 397.06966857 0 0 1 31.20761905-71.4938179l-55.86636597-55.89000838a23.61849397 23.61849397 0 0 1 0-33.42997943l138.66112508-138.68476851a24.35139962 24.35139962 0 0 1 33.42998045 0l61.06763581 61.06763683c20.85236317-9.85877029 43.07597105-17.96802337 66.33983288-24.23318959V32.71277308a23.64213537 23.64213537 0 0 1 23.64213537-23.64213536h196.11151543a23.64213537 23.64213537 0 0 1 23.64213536 23.64213536v100.12444445c19.07920356 7.0689981 37.42550044 15.46195708 54.89703924 25.13159009l72.48678806-72.48678705a23.54756673 23.54756673 0 0 1 33.42997943 0l138.6611261 138.6847675a23.61849397 23.61849397 0 0 1 0 33.42997943L855.7566527 335.02476191c7.51819886 15.8402306 14.09071238 32.53157892 19.62297193 49.95583289h110.57426896a23.64213537 23.64213537 0 0 1 23.64213536 23.64213536v196.11151543a23.64213537 23.64213537 0 0 1-23.64213536 23.64213537h-110.66883759a404.2332353 404.2332353 0 0 1-19.88303543 49.60120076l77.75898413 77.75898412a23.61849397 23.61849397 0 0 1 0 33.42997943l-138.6611261 138.70840991a23.54756673 23.54756673 0 0 1-33.42997943 0l-72.41586184-72.46314565c-17.49518019 9.69327543-35.91240432 18.10987581-54.96796546 25.15523251v100.0298758a23.64213537 23.64213537 0 0 1-23.64213536 23.66577778z m-172.44573765-47.28427174h148.82724368v-93.22094019a23.64213537 23.64213537 0 0 1 16.3603586-22.48367137 352.92980114 352.92980114 0 0 0 77.26249854-35.58141359 23.64213537 23.64213537 0 0 1 29.15075353 3.4044668l68.60947809 68.6567619 105.23114565-105.27842946-73.14876749-73.14876749a23.64213537 23.64213537 0 0 1-4.16101587-27.80315225 355.86142578 355.86142578 0 0 0 29.12711111-72.98327264 23.61849397 23.61849397 0 0 1 22.81466006-17.42425397h104.64009245v-148.82724368h-104.59280762a23.64213537 23.64213537 0 0 1-22.81466108-17.42425397 352.74066387 352.74066387 0 0 0-28.7961214-73.31426235 23.59485156 23.59485156 0 0 1 4.13737448-27.85043606l72.77049295-72.79413537-105.23114565-105.25478806-68.63311949 68.63311949a23.57120914 23.57120914 0 0 1-29.12711111 3.40446781 354.30104483 354.30104483 0 0 0-77.23885715-35.53412978 23.61849397 23.61849397 0 0 1-16.3603586-22.48367136V56.35490946h-148.82724368v84.44970769a23.64213537 23.64213537 0 0 1-18.48814934 23.07472457 350.49466108 350.49466108 0 0 0-88.65800939 32.29515784 23.66577778 23.66577778 0 0 1-27.82679365-4.16101587l-56.41013537-56.41013639-105.23114565 105.25478807 52.08362464 52.10726705a23.64213537 23.64213537 0 0 1 3.4044678 29.12711111 351.29849397 351.29849397 0 0 0-40.49897853 92.65352939 23.64213537 23.64213537 0 0 1-22.81466108 17.4715388H61.66460038v148.82724368H133.01656584c10.66260317 0 20.00124648 7.13992533 22.79101867 17.40061156a353.44992813 353.44992813 0 0 0 40.42805232 92.86630908 23.59485156 23.59485156 0 0 1-3.3808254 29.17439492l-51.89448838 51.89448838 105.23114565 105.27842946 56.33920914-56.33920915a23.66577778 23.66577778 0 0 1 27.80315226-4.18465727 353.11893841 353.11893841 0 0 0 88.75257701 32.24787302c10.82809803 2.43514006 18.51179175 12.01020444 18.51179175 23.09836597v84.49699251z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconshezhi.defaultProps = {
  size: 18,
};

export default Iconshezhi;
