import React from 'react';
import styled from '@emotion/styled';
import Typography from './typography';
import hexToRGBA from '../utils/hex-to-rgba';
import palette from '../styles/palette';

interface ChipProps {
  label: string;
}

const StyledDiv = styled.div({
  display: 'inline-block',
  backgroundColor: `${hexToRGBA(palette.primary, 0.15)}`,
  padding: '5px 10px',
  borderRadius: 4,
  width: 'fit-content',
  whiteSpace: 'nowrap',

})

const Chip: React.FC<ChipProps> = ({ label }) => {
  return (
    <StyledDiv>
      <Typography variant='action2' color="primary">{label}</Typography>
    </StyledDiv>
  )
};

export default Chip;
