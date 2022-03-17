import React from 'react';
import styled from '@emotion/styled';
import palette from '../styles/palette';
import typographyMap from '../styles/typography';

interface ButtonProps {
  children: React.ReactNode;
  handleClick: () => void;
  className?: string;
}

const StyledButton = styled.button({
  ...typographyMap.button.style,
  border: 'none',
  color: palette.white,
  backgroundColor: palette.primary,
  borderRadius: '2px',
  padding: '8px 16px',
  cursor: 'pointer',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  transition: 'background-color 0.2s, box-shadow 0.2s',
  '&:hover': {
    backgroundColor: palette.primaryDark,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
});

const Button = ({ children, handleClick, className }: ButtonProps) => {
  return (
    <StyledButton onClick={handleClick} className={className}>{children}</StyledButton>
  )
};

export default Button;
