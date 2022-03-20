import React from 'react';
import styled from '@emotion/styled';
import { Color, TypographyVariant } from '../../types';
import RadioContext, { RadioContextValue } from './context';
import { RadioProps } from './types';

const StyledDiv = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

type RadioButton = React.ReactElement<RadioProps>;

interface RadioGroupProps {
  activeColor?: Color;
  activeValue?: string;
  children: RadioButton | RadioButton[];
  className?: string;
  handleChange?: (value: string) => void;
  labelColor?: Color;
  labelVariant?: TypographyVariant;
  name: string;
}

const RadioGroup = ({ children, name, activeColor, activeValue, labelVariant, labelColor, className, handleChange }: RadioGroupProps) => {
  const [activeRadio, setActiveRadio] = React.useState(activeValue);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveRadio(e.target.value);
    handleChange && handleChange(e.target.value);
  };

  const radioContext: RadioContextValue = React.useMemo(() => ({
    activeColor: activeColor || labelColor,
    activeValue: activeRadio,
    handleChange: handleRadioChange,
    labelColor,
    labelVariant,
    name,
  }), [activeRadio, handleChange]);

  return (
    <RadioContext.Provider value={radioContext}>
      <StyledDiv className={className}>
        {children}
      </StyledDiv>
    </RadioContext.Provider>
  )
}

export default RadioGroup;
