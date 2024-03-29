import React from 'react';
import styled from '@emotion/styled';
import palette from '../styles/palette';
import Typography from './typography';
import { Color, TypographyVariant } from '../types';
import humanized from '../utils/humanized';

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
    width: '4px',
    height: '7px',
    border: 'solid white',
    borderWidth: '0 2px 2px 0',
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
  checked?: boolean;
  value: string;
  handleChange?: (checked: boolean, value: string) => void;
  label?: string;
  labelVariant?: TypographyVariant;
  labelColor?: Color;
}

const Checkbox = ({ value, label, labelVariant, labelColor, handleChange, checked = false }: CheckboxProps) => {
  const [isChecked, setIsChecked] = React.useState(checked);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
    handleChange && handleChange(e.target.checked, value);
  };

  return (
    <StyledLabel>
      <StyledTypography variant={labelVariant} color={labelColor}>
        {label || humanized(value)}
      </StyledTypography>
      <HiddenInput type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      <StyledSpan />
    </StyledLabel>
  )
};

export default Checkbox;
