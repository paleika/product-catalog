import React from 'react';
import styled from '@emotion/styled';
import palette from '../../styles/palette';

const StyledDiv = styled.div({
  margin: '0px -24px 14px -24px',
  padding: '3px 24px 17px 24px',
  borderBottom: `1px solid ${palette.backgroundDark}`,
})

const Header: React.FC = ({ children }) => {
  return (
    <StyledDiv>{children}</StyledDiv>
  )
};

export default Header;
