import React from 'react';
import styled from '@emotion/styled';
import { Card, Checkbox, Input, Typography } from '../../ui-components';
import SearchIcon from '../../assets/search-icon';

const StyledGroupsBar = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 32,
  marginBottom: 20,
})

const StyledInput = styled(Input)({
  marginBottom: 18,
});

const ProductFilter = () => {
  return (
    <Card fullWidth>
      <Card.Header>
        <Typography variant='h2'>I'm looking for...</Typography>
      </Card.Header>
      <StyledGroupsBar>
        <Checkbox label="Software Development" labelVariant='action1' labelColor='darkGrey' />
        <Checkbox label="Daily Busuness" labelVariant='action1' labelColor='darkGrey' />
        <Checkbox label="Graphic Editors" labelVariant='action1' labelColor='darkGrey' />
        <Checkbox label="Text Editors" labelVariant='action1' labelColor='darkGrey' />
        <Checkbox label="Management Tools" labelVariant='action1' labelColor='darkGrey' />
      </StyledGroupsBar>
      <StyledInput
        handleChange={(value) => console.log("INPUT:", value)}
        placeholder="Type here..."
        startAdornment={<SearchIcon color='mediumGrey' />}
      />
    </Card>
  )
};

export default ProductFilter;
