import React from 'react';
import styled from '@emotion/styled';
import { Card, Checkbox, Input, Typography } from '../../ui-components';
import SearchIcon from '../../assets/search-icon';
import { usePCStore } from '../../store/context';
import { observer } from 'mobx-react-lite';

const StyledGroupsBar = styled.div({
  display: 'flex',
  gap: 32,
  marginTop: 32,
  marginBottom: 20,
})

const StyledInput = styled(Input)({
  marginBottom: 18,
});

const ProductFilter = () => {
  const { categories, toggleCategory, setTerm } = usePCStore();

  const handleSelectCategory = React.useCallback((_checked: boolean, value: string) => {
    toggleCategory(value);
  }, []);

  const handleInputChange = React.useCallback((value: string) => {
    setTerm(value);
  }, []);

  return (
    <Card fullWidth>
      <Card.Header>
        <Typography variant='h2'>I'm looking for...</Typography>
      </Card.Header>
      <StyledGroupsBar>
        {categories.map((category) => (
          <Checkbox
            key={category}
            value={category}
            labelVariant="action1"
            labelColor="darkGrey"
            handleChange={handleSelectCategory}
          />
        ))}
      </StyledGroupsBar>
      <StyledInput
        handleChange={handleInputChange}
        placeholder="Type here..."
        startAdornment={<SearchIcon color='mediumGrey' />}
      />
    </Card>
  )
};

export default observer(ProductFilter);
