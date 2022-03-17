/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';

import typographyMap from '../styles/typography';
import { Color, TypographyVariant } from '../types';
import palette from '../styles/palette';

interface TypographyProps {
  children: React.ReactNode;
  color?: Color;
  variant?: TypographyVariant;
  className?: string;
}

const Typography = ({ children, className, color, variant = 'body1' }: TypographyProps) => {
  const { component: Component, style } = typographyMap[variant];
  return (
    <Component css={[style, { color: color && palette[color] }]} className={className}>
      {children}
    </Component>
  )
}

export default Typography;
