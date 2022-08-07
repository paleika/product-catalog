import React from 'react';
import styled from '@emotion/styled';
import ProductFilter from './products/filter'
import ProductCard from './products/card';
import ProductDetailsCard from './products/details';
import { observer } from 'mobx-react-lite';
import { usePCStore } from '../store/context';

import mockProducts from './products/mock-products';
import Spinner from '../assets/spinner';
import { FetchedProductShape } from '../types/products';

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

const mockDataPromise = new Promise<FetchedProductShape[]>((resolve) => {
  setTimeout(() => resolve(mockProducts), 1500);
});

const Products = observer(() => {
  const { filteredProducts, setProducts, status, selectedProductId, getProductById } = usePCStore();

  const fetchProducts = async () => {
    const products = await mockDataPromise;
    setProducts(products);
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
          {filteredProducts.map((id) => (
            <ProductCard
              key={`card_${id}`}
              product={getProductById(id)}
              isSelected={id === selectedProductId}
            />
          ))}
        </StyledTable>

        {selectedProductId && <ProductDetailsCard />}
      </StyledContent>
    </>
  )
});

export default Products;
