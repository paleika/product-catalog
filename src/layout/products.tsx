import React from 'react';
import styled from '@emotion/styled';
import ProductFilter from './products/filter'
import ProductCard from './products/card';
import ProductDetails from './products/details';
import { useDispatch, useSelector } from '../store';
import actions from '../store/actions';
import mockProducts from './products/mock-products';
import Spinner from '../assets/spinner';
import { ProductShape } from '../types/products';

const StyledContent = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  gap: 16,
});

const StyledTable = styled.div({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

const mockDataPromise = new Promise<ProductShape[]>((resolve) => {
  setTimeout(() => resolve(mockProducts), 500);
});



const Products = () => {
  const status = useSelector((state) => state.status);
  const filteredLength = useSelector((state) => state.filteredProducts.length);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const products = await mockDataPromise;
    dispatch({
      type: actions.SET_PRODUCTS,
      payload: products,
    });
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);

  if (status === 'initial') {
    return <Spinner />
  }

  return (
    <>
      <StyledContent>
        <StyledTable>
          <ProductFilter />
          {[...Array(filteredLength)].map((_item, index) => <ProductCard key={`card_${index}`} index={index} />)}
        </StyledTable>

        <ProductDetails />
      </StyledContent>
    </>
  )
};

export default Products;
