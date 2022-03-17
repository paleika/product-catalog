import React from 'react';
import styled from '@emotion/styled';

interface ChipListProps {
  className?: string;
}

const StyledDiv = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
});

const ChipList: React.FC<ChipListProps> = ({ children, className }) => {
  return (
    <StyledDiv className={className}>{children}</StyledDiv>
  )
};

export default ChipList;
