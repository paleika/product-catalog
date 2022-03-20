import React from 'react';
import palette from '../styles/palette';
import { SVGIconProps } from '../types';

const SearchIcon = ({ color = 'secondary' }: SVGIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="14.8643" y="15.4214" width="2" height="9.2898" rx="1" transform="rotate(-45 14.8643 15.4214)" fill={palette[color]} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.8572 16C14.1709 16 16.8572 13.3137 16.8572 10C16.8572 6.68629 14.1709 4 10.8572 4C7.54347 
        4 4.85718 6.68629 4.85718 10C4.85718 13.3137 7.54347 16 10.8572 16ZM10.8572 18C15.2755 18 18.8572 
        14.4183 18.8572 10C18.8572 5.58172 15.2755 2 10.8572 2C6.4389 2 2.85718 5.58172 2.85718 10C2.85718 
        14.4183 6.4389 18 10.8572 18Z"
        fill={palette[color]}
      />
    </svg>
  )
};

export default SearchIcon;
