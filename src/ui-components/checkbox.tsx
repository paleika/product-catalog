import React from 'react';
import styled from '@emotion/styled';
import palette from '../styles/palette';
import Typography from './typography';
import { Color, TypographyVariant } from '../types';

const StyledLabel = styled.label({
  display: 'block',
  position: 'relative',
  paddingLeft: 26,
  width: 'fit-content',
  cursor: 'pointer',
  userSelect: 'none',
  '&:hover input ~ span': {
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  '& input:checked ~ span': {
    backgroundColor: palette.primary,
    borderColor: palette.primary,
  },
  '&:hover input:checked ~ span': {
    backgroundColor: palette.primaryDark,
    borderColor: palette.primaryDark,
  },
  '& input:checked ~ span:after': {
    display: 'block',
  },
  '& span:after': {
    left: '4px',
    top: '1px',
    width: '3px',
    height: '6px',
    border: 'solid white',
    borderWidth: '0 3px 3px 0',
    transform: 'rotate(45deg)',
  }
});

const HiddenInput = styled.input({
  position: 'absolute',
  opacity: 0,
  cursor: 'pointer',
  height: 0,
  width: 0,
});

const StyledSpan = styled.span({
  position: 'absolute',
  top: 0,
  left: 0,
  height: 14,
  width: 14,
  border: '1px solid rgba(0, 0, 0, 0.05)',
  borderRadius: 2,
  '&:after': {
    content: '""',
    position: 'absolute',
    display: 'none',
  },
});

const StyledTypography = styled(Typography)({
  lineHeight: '16px',
})

interface CheckboxProps {
  label: string;
  labelVariant?: TypographyVariant;
  labelColor?: Color;
}

const Checkbox = ({ label, labelVariant, labelColor }: CheckboxProps) => {
  return (
    <StyledLabel>
      <StyledTypography variant={labelVariant} color={labelColor}>{label}</StyledTypography>
      <HiddenInput type="checkbox" />
      <StyledSpan />
    </StyledLabel>
  )
};

export default Checkbox;
