import React from 'react';
import styled from '@emotion/styled';
import palette from '../styles/palette';
import { SVGIconProps } from '../types';

const StyledWrapper = styled.div<{ focused: boolean; disabled: boolean }>((props) => ({
  backgroundColor: palette.smoke,
  border: '1px solid',
  borderColor: props.focused ? palette.grey : palette.light,
  borderRadius: 2,
  height: 36,
  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: 5,
  '&:hover': {
    borderColor: props.disabled ? palette.light : palette.grey,
  },
}));

const StyledInput = styled.input({
  flex: '1 0',
  minWidth: 80,
  backgroundColor: 'transparent',
  color: palette.secondary,
  border: 0,
  '&:focus': {
    outline: 'none',
  },
  '&::placeholder': {
    color: palette.darkGrey,
  },
});

const StyledAdornment = styled.div({
  width: 24,
  height: 24,
  marginRight: 11,
})


interface InputProps {
  handleChange: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
  startAdornment?: React.ReactElement<SVGIconProps>;
  disabled?: boolean;
  className?: string;
}

const Input = ({ handleChange, defaultValue, disabled = false, placeholder, startAdornment, className }: InputProps) => {
  const [inputValue, setInputValue] = React.useState(defaultValue || '');
  const [focused, setFocused] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    handleChange && handleChange(e.target.value);
  };

  return (
    <StyledWrapper focused={focused} disabled={disabled} className={className}>
      {startAdornment && (
        <StyledAdornment>{startAdornment}</StyledAdornment>
      )}
      <StyledInput
        value={inputValue}
        disabled={disabled}
        onChange={handleInputChange}
        placeholder={placeholder}
        onFocus={() => !disabled && setFocused(true)}
        onBlur={() => !disabled && setFocused(false)}
      />
    </StyledWrapper>
  )
};

export default Input;
