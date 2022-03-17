import React from 'react';
import styled from '@emotion/styled';
import palette from '../styles/palette';
import { Color } from '../types';
import hexToRGBA from '../utils/hex-to-rgba';

import Header from './card/header';

interface CardProps {
  children: React.ReactNode | React.ReactNode[];
  fullWidth?: boolean;
  outline?: Color;
  className?: string;
}

const StyledDiv = styled.div<CardProps>(({ fullWidth, outline }) => {
  const shadowColor = outline ? palette[outline] : palette.black;
  return {
    backgroundColor: palette.white,
    borderRadius: 4,
    padding: '14px 24px',
    width: fullWidth ? '100%' : undefined,
    border: outline ? `1px solid ${palette[outline]}` : 'none',
    boxSizing: 'border-box',
    boxShadow: `0px 1px 2px ${hexToRGBA(shadowColor, 0.08)}`,
  }
});

const Card = ({ children, fullWidth, outline, className }: CardProps) => {
  console.log('Card', outline)
  return (
    <StyledDiv
      fullWidth={fullWidth}
      outline={outline}
      className={className}
    >
      {children}
    </StyledDiv>
  )
};

Card.Header = Header;

export default Card;
