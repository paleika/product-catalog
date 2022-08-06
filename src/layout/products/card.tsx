import React from 'react';
import styled from '@emotion/styled';
import { Card, Chip, ChipList, Typography } from '../../ui-components';
import { usePCStore } from '../../store/context';
import { observer } from 'mobx-react-lite';

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
  index: number;
}

const ProductCard = observer(({ index }: ProductCardProps) => {
  const store = usePCStore();
  const product = store.filteredProducts[index];
  const isSelected = store.selectedProduct === index;

  const handleCardClick = React.useCallback(() => {
    store.setSelectedProduct(index);
  }, [index]);

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
});

export default ProductCard;
