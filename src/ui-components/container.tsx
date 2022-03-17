import React from 'react';
import styled from '@emotion/styled';

const Main = styled.main(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 24,
  maxWidth: 1152,
  margin: 'auto',
}));

const Container: React.FC = ({ children }) => (
  <Main>
    {children}
  </Main>
);

export default Container;
