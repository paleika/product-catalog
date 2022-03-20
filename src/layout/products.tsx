import React from 'react';
import styled from '@emotion/styled';
import ProductFilter from './products/filter'
import ProductCard from './products/card';
import ProductDetails from './products/details';

const StyledContent = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 16,
})

const StyledTable = styled.div({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

const Products = () => {
  return (
    <>
      <StyledContent>
        <StyledTable>
          <ProductFilter />

          <ProductCard />
          <ProductCard />
          <ProductCard />
        </StyledTable>

        <ProductDetails />
      </StyledContent>
    </>
  )
};

export default Products;
