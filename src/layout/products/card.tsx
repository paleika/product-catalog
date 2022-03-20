import React from 'react';
import styled from '@emotion/styled';
import { Card, Chip, ChipList, Typography } from '../../ui-components';
import { useDispatch, useSelector } from '../../store';
import actions from '../../store/actions';

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

const ProductCard = ({ index }: ProductCardProps) => {
  const product = useSelector((state) => state.filteredProducts[index]);
  const isSelected = useSelector((state) => state.selectedProduct === index);
  const dispatch = useDispatch();

  const handleCardClick = React.useCallback(() => {
    dispatch({
      type: actions.SET_SELECTED_PRODUCT,
      payload: isSelected ? null : index,
    })
  }, [index, isSelected]);

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

export default ProductCard;
