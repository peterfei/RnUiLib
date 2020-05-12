/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Icontaobao = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M188.567704 146.62163c48.469333 0 87.684741 35.271111 87.68474 78.506666 0 43.159704-39.215407 78.392889-87.68474 78.392889-48.431407 0-87.646815-35.233185-87.646815-78.392889 0-43.235556 39.215407-78.506667 87.646815-78.506666zM261.764741 617.908148c-23.153778 71.547259-17.389037 44.999111-109.264593 244.167111l-133.101037-82.811259s148.423111-134.769778 178.972445-196.323556c32.199111-64.929185-35.65037-99.574519-35.650371-99.574518l-101.925926-63.450074 55.049482-84.66963c76.894815 56.964741 82.678519 61.724444 134.561185 113.626074 40.087704 40.144593 35.081481 95.93363 11.377778 169.035852z"
        fill={getIconColor(color, 0, '#F15A4A')}
      />
      <Path
        d="M985.125926 710.826667c-25.960296 242.915556-342.660741 152.670815-342.660741 152.670814l17.161482-69.537185 61.44 15.73926c135.68 8.628148 110.554074-109.700741 110.554074-109.700741V356.105481c0-130.541037-111.141926-144.080593-333.975704-64.549925l57.837037 6.599111c-4.475259 15.284148-15.454815 57.799111-36.845037 57.799111h275.531852v74.676148h-149.655704v74.676148h149.674667v37.357037h-149.674667v149.921185c0-8.38163 50.612148-19.607704 70.84563-34.62637l-13.691259-55.068445 79.549629-24.462222 65.839408 160.578371-96.976593 40.25837-17.180444-64c-43.292444 33.147259-133.518222 81.028741-290.778075 76.8-168.163556 4.304593-125.022815-199.528296-125.022814-199.528296l4.285629-12.534519h118.177185c-0.758519 37.338074-10.979556 75.851852 3.034075 97.905778 11.377778 18.10963 33.886815 26.358519 52.754963 27.230815 2.104889 0.284444-0.512 5.461333-0.512 5.537185v-168.011852h-187.107556v-37.357037h187.107556V430.648889h-29.904593c-38.58963 37.357037-73.765926 74.789926-73.765926 74.789926L339.437037 460.325926c36.750222-38.58963 73.53837-99.593481 96.161185-140.47763-18.469926 7.528296-37.432889 15.511704-56.964741 24.120889a894.103704 894.103704 0 0 1-65.554962 73.386667c0.853333 1.327407-84.574815-47.767704-84.574815-47.767704 88.291556-75.282963 137.822815-236.468148 137.822815-236.468148l122.955851 34.285037s-10.315852 23.893333-31.156148 60.378074c491.899259-138.960593 520.419556 85.219556 520.419556 85.219556s32.407704 154.870519 6.561185 397.824z"
        fill={getIconColor(color, 1, '#F15A4A')}
      />
    </Svg>
  );
};

Icontaobao.defaultProps = {
  size: 18,
};

export default Icontaobao;