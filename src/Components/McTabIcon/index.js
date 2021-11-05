import React from 'react';
import McIcon from '../McIcon';

const McTabIcon = ({ icon, color, size }) => (
  <McIcon
    source={icon}
    resizeMode="contain"
    style={{
      width: size,
      height: size,
      tintColor: color,
    }}
  />
);

export default McTabIcon;
