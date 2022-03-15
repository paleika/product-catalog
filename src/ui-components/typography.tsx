/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';

import typographyMap from '../styles/typography';
import { TypographyVariant } from '../types';

interface TypographyProps {
  children: React.ReactNode;
  color?: string;
  variant?: TypographyVariant;
}

const Typography = ({ children, variant = 'body1' }: TypographyProps) => {
  const { component: Component, style } = typographyMap[variant];
  return (
    <Component css={style}>
      {children}
    </Component>
  )
}

export default Typography;
