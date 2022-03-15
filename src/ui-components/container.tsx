import React from 'react';
import styled from '@emotion/styled';

const Main: React.FC = styled.main(() => ({
  display: 'flex',
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
