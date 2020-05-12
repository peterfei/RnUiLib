/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconyidong = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M529.805597 1007.960497z m130.417608-841.825557L540.301519 14.535507C531.854386 4.616526 523.983194-0.245975 516.751937 0.009999c-7.295251 0.255974-15.230436 5.887395-23.933542 16.765278L365.856432 175.733955c-8.703106 10.878883-11.39083 19.517996-8.127166 25.789351 3.263665 6.271356 11.262843 9.343041 23.933543 9.215054 7.423238-0.063993 16.638291 0.063993 27.645161 0.511948s19.837963 0.575941 26.49328 0.511947c9.662008-0.831915 15.805377 2.623731 18.30112 10.366936 2.495744 7.806198 3.519639 18.558094 2.943698 32.379675l-0.063993 4.031586h-0.319968v416.593222l-0.063993 1.471848a1566.544139 1566.544139 0 0 0-0.063993 29.884932c0.063993 9.471027 0.063993 18.686081-0.063994 27.645161s-0.127987 17.982153-0.063993 27.06822c0.063993 9.15106 0.063993 18.494101-0.063994 28.221102 0.255974 9.279047-0.831915 15.742383-3.327658 19.326016-2.43175 3.583632-8.191159 5.375448-17.085246 5.503435-8.191159 0.127987-18.558094 0.511947-31.036813 1.215875s-22.461694 1.087888-29.884931 1.215875c-12.670699 0.127987-20.15793 4.159573-22.461693 11.966771-2.303763 7.871192 1.471849 17.854167 11.39083 30.012918l119.922686 151.598433c8.063172 9.599014 15.87037 14.142548 23.293608 13.694594 7.423238-0.447954 15.48641-5.759409 24.189516-15.934364l126.449015-159.533618c8.703106-10.878883 11.518817-19.581989 8.383139-26.045325-3.071685-6.463336-10.942876-9.663008-23.612575-9.471028-7.423238 0.063993-15.998357 0-25.661365-0.255973a262.051091 262.051091 0 0 0-25.149417 0.319967c-9.663008 0.127987-15.806377-2.815711-18.302121-8.703107-2.559737-5.951389-3.711619-15.614397-3.583632-28.989023l0.127987-12.158751h0.447954V356.003444a58.616981 58.616981 0 0 0 0.38396-6.592323c0.255974-20.860858 0.19198-39.162979-0.19198-54.969356-0.063993-3.903599-0.19198-7.935185-0.19198-12.094758v-23.805555h-0.127987l0.127987-18.238128a53.114546 53.114546 0 0 1 3.903599-22.077733c2.495744-5.054481 7.999179-7.806198 16.574298-8.319145 8.191159-0.062994 17.982153-0.510948 29.308991-1.150882a547.778751 547.778751 0 0 1 28.221102-1.151882c13.05366 0.19198 20.604884-3.711619 22.78066-11.710797 2.23977-8.063172-1.471849-17.982153-11.006869-29.756945z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M166.13494 363.680655L14.535507 483.603341C4.616526 492.050474-0.245975 499.921665 0.009999 507.152923c0.255974 7.231257 5.887395 15.230436 16.765278 23.933542l159.022671 126.960963c10.878883 8.703106 19.517996 11.39083 25.789352 8.127165 6.271356-3.263665 9.343041-11.262843 9.215054-23.932542-0.063993-7.423238 0.063993-16.638291 0.511947-27.645161a538.819671 538.819671 0 0 0 0.511948-26.49328c-0.831915-9.663008 2.623731-15.806377 10.366935-18.30212 7.806198-2.495744 18.558094-3.519639 32.379675-2.943698l4.031586 0.063993v0.319967h416.593222l1.471849 0.063994c10.430929 0.127987 20.413904 0.127987 29.884931 0.063993 9.471027-0.063993 18.686081-0.063993 27.645161 0.063994s17.982153 0.127987 27.068221 0.063993c9.15106-0.063993 18.494101-0.063993 28.221102 0.063994 9.279047-0.255974 15.742383 0.831915 19.326015 3.327658 3.583632 2.43175 5.375448 8.191159 5.503435 17.086245 0.127987 8.191159 0.511947 18.558094 1.215875 31.036813s1.087888 22.461694 1.215876 29.884932c0.127987 12.669699 4.159573 20.15793 11.966771 22.460693 7.871192 2.303763 17.854167-1.471849 30.012918-11.39083l151.598433-119.921686c9.599014-8.063172 14.142548-15.87037 13.694594-23.293608-0.447954-7.423238-5.759409-15.48641-15.934364-24.189516L848.554866 366.112406c-10.878883-8.703106-19.581989-11.518817-26.045326-8.38314-6.463336 3.071685-9.663008 10.942876-9.471027 23.613576 0.063993 7.423238 0 15.998357-0.255974 25.661365-0.255974 9.663008-0.19198 18.046147 0.319967 25.149417 0.127987 9.662008-2.815711 15.805377-8.703106 18.301121-5.951389 2.559737-15.614397 3.711619-28.989023 3.583632l-12.158752-0.127987v-0.447954H356.065437a58.616981 58.616981 0 0 0-6.591323-0.383961 1524.565449 1524.565449 0 0 0-54.969355 0.191981c-3.903599 0.063993-7.935185 0.19198-12.094758 0.19198h-23.869549v0.127987l-18.238128-0.127987a53.114546 53.114546 0 0 1-22.077733-3.903599c-5.054481-2.495744-7.806198-7.999179-8.319145-16.573298a629.945314 629.945314 0 0 0-1.150882-29.308991 547.778751 547.778751 0 0 1-1.151882-28.221102c0.19198-13.054659-3.711619-20.605884-11.710797-22.781661-8.063172-2.23977-17.982153 1.471849-29.756945 11.00687z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Iconyidong.defaultProps = {
  size: 18,
};

export default Iconyidong;