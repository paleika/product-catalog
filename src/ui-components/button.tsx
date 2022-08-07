import React from 'react';
import styled from '@emotion/styled';
import palette from '../styles/palette';
import typographyMap from '../styles/typography';

type Variant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  component?: 'button' | 'a';
  handleClick?: () => void;
  href?: string;
  variant?: Variant;
}

const variantColors: Record<Variant, { color: string, hoverColor: string }> = {
  primary: {
    color: palette.primary,
    hoverColor: palette.primaryDark,
  },
  secondary: {
    color: palette.grey,
    hoverColor: palette.mediumGrey,
  },
}

const buttonStyle = {
  ...typographyMap.button.style,
  border: 'none',
  color: palette.white,
  borderRadius: '2px',
  padding: '8px 16px',
  cursor: 'pointer',
  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
  transition: 'background-color 0.2s, box-shadow 0.2s',
  '&:hover': {
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  },
};

const StyledButton = styled.button<ButtonProps>(({ variant = 'primary' }) => {
  const buttonPalette = variantColors[variant]
  return {
    ...buttonStyle,
    backgroundColor: buttonPalette.color,
    '&:hover': {
      ...buttonStyle['&:hover'],
      backgroundColor: buttonPalette.hoverColor,
    }
  }
});

const StyledLink = styled.a({
  ...buttonStyle,
  display: 'inline-block',
  textDecoration: 'none',
});


const Button = ({ children, handleClick, component = 'button', href, className, variant }: ButtonProps) => {
  if (component === 'a') {
    return (
      <StyledLink href={href} className={className} target="_blank">{children}</StyledLink>
    )
  }

  return (
    <StyledButton onClick={handleClick} className={className} variant={variant}>{children}</StyledButton>
  )
};

export default Button;
