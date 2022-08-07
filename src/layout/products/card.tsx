import React from 'react';
import styled from '@emotion/styled';
import { Card, Chip, ChipList, Typography } from '../../ui-components';
import { usePCStore } from '../../store/context';
import { observer } from 'mobx-react-lite';
import { ProductShape } from '../../types/products';

const StyledWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const StyledContent = styled.div({
  flexGrow: 1,
});

const StyledTitle = styled(Typography)({
  marginBottom: 8,
});

const StyledSubtitle = styled(Typography)({
  whiteSpace: 'nowrap',
  marginLeft: 16,
});

interface ProductCardProps {
  // productId: string;
  product: ProductShape | undefined;
  isSelected: boolean;
}

const ProductCard = ({ product, isSelected }: ProductCardProps) => {
  const store = usePCStore();
  // const product = store.getProductById(productId);
  // const isSelected = store.selectedProductId === productId;

  if (product === undefined) {
    return null;
  }

  const handleCardClick = React.useCallback(() => {
    store.setSelectedProductId(product.id);
  }, []);

  return (
    <div onClick={handleCardClick}>
      <Card fullWidth outline={isSelected ? 'primary' : 'white'}>
        <StyledWrapper>
          <StyledContent>
            <StyledTitle variant='h3'>{product.productName}</StyledTitle>
            <ChipList>
              {product.tags.length === 0
                ? <Typography variant='action2' color='mediumGrey'>No tags</Typography>
                : product.tags.map((tag) => <Chip key={tag} label={tag} />)}
            </ChipList>
          </StyledContent>
          <div>
            <StyledSubtitle variant='subtitle' color="darkGrey">{product.category}</StyledSubtitle>
          </div>
        </StyledWrapper >
      </Card>
    </div>
  )
};

export default observer(ProductCard);
