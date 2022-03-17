import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '../ui-components';

const StyledDiv = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  marginTop: 41,
  marginBottom: 36,
});

const Title = () => (
  <StyledDiv>
    <Typography variant='h1'>Create Demand</Typography>
    <Typography color="darkGrey">Search the product you need here. Use tags to find any alternative.</Typography>
  </StyledDiv>
)

export default Title;
