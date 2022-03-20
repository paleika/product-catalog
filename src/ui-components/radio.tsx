import React from 'react';
import styled from '@emotion/styled';
import Typography from './typography';
import palette from '../styles/palette';
import { RadioProps } from './radio/types';
import humanized from '../utils/humanized';
import RadioContext from './radio/context';
import RadioGroup from './radio/group';

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
    borderColor: palette.primary,
  },
  '&:hover input:checked ~ span': {
    borderColor: palette.primaryDark,
  },
  '& input:checked ~ span:after': {
    display: 'block',
  },
  '&:hover input:checked ~ span:after': {
    backgroundColor: palette.primaryDark,
  },
  '& span:after': {
    left: '3px',
    top: '3px',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: palette.primary,
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
  borderRadius: '50%',
  '&:after': {
    content: '""',
    position: 'absolute',
    display: 'none',
  },
});

const StyledTypography = styled(Typography)({
  lineHeight: '16px',
})

const StyledChildrenWrapper = styled.div({
  marginTop: 6,
})

const noop = () => undefined;

const RadioButton = ({ value, children, label, className }: RadioProps) => {
  const radioContext = React.useContext(RadioContext);

  const {
    activeColor,
    activeValue = '',
    handleChange = noop,
    labelColor,
    labelVariant = 'action1',
    name,
  } = radioContext || {};

  const isActive = activeValue === value;

  return (
    <div className={className}>
      <StyledLabel>
        <StyledTypography variant={labelVariant} color={isActive ? activeColor : labelColor}>
          {label || humanized(value)}
        </StyledTypography>
        <HiddenInput type="radio" name={name} value={value} onChange={handleChange} checked={isActive} />
        <StyledSpan />
      </StyledLabel>
      {children !== undefined ? <StyledChildrenWrapper>{children}</StyledChildrenWrapper> : null}
    </div>
  )
};

RadioButton.Group = RadioGroup;

export default RadioButton;
