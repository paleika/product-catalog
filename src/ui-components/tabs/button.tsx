import React from 'react';
import styled from '@emotion/styled';
import Typography from '../typography';
import palette from '../../styles/palette';
import hexToRGBA from '../../utils/hex-to-rgba';

const StyledTab = styled.div<{ active: boolean; disabled: boolean }>(({ active, disabled }) => {
  let tabColor = active ? palette.primary : palette.mediumGrey;

  return {
    padding: '17px 36px 13px 36px',
    color: disabled ? palette.grey : tabColor,
    borderBottom: '2px solid',
    borderBottomColor: disabled ? hexToRGBA(palette.secondary, 0.15) : tabColor,
    cursor: disabled ? 'unset' : 'pointer',
    transition: 'color 0.1s',
  };
});

interface TabButtonProps {
  label: string;
  value: string;
  active: boolean;
  disabled: boolean;
  handleClick: (value: string) => void;
}

const TabButton = ({ active, disabled, label, value, handleClick }: TabButtonProps) => {
  const handleTabClick = () => {
    if (disabled) {
      return;
    }
    handleClick(value);
  }

  return (
    <StyledTab active={active} disabled={disabled} onClick={handleTabClick} role="button">
      <Typography variant='button'>{label}</Typography>
    </StyledTab>
  );
};

export default TabButton;
