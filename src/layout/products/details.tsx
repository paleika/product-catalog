import React from 'react';
import styled from '@emotion/styled';
import { Button, Card, Chip, ChipList, Radio, Typography } from '../../ui-components';
import { useSelector } from '../../store';

const StyledCard = styled(Card)({
  flex: '0 0 320px',
});

const StyledTitle = styled(Typography)({
  marginTop: 42,
  marginBottom: 21,
});

const StyledChipList = styled(ChipList)({
  marginBottom: 24,
});

const StyledButton = styled(Button)({
  marginBottom: 11,
});

const StyledRadio = styled(Radio)({
  marginTop: 16,
  marginBottom: 10,
});

const StyledDescription = styled(Typography)({
  marginBottom: 16,
})

interface ProductDetailsProps {
  index: number;
}

const ProductDetails = ({ index }: ProductDetailsProps) => {
  const product = useSelector((state) => state.filteredProducts[index]);

  const { option1, option2 } = product;

  return (
    <StyledCard>
      <Card.Header>
        <Typography variant='h2'>Product Details</Typography>
      </Card.Header>

      <StyledTitle variant='h3'>{product.productName}</StyledTitle>

      <StyledChipList>
        {product.tags.length === 0
          ? <Typography variant='action2' color='mediumGrey'>No tags</Typography>
          : product.tags.map((tag) => <Chip key={tag} label={tag} />)}
      </StyledChipList>

      <StyledButton component='a' href={product.manufacturerUrl}>Go to Manufacturer</StyledButton>

      {product.description.map((paragpaph, idx) => <StyledDescription key={`paragraph_${idx}`}>{paragpaph}</StyledDescription>)}

      {(option1 && option2) && (
        <Radio.Group name="product_options" activeValue='option1' labelColor='darkGrey' activeColor='secondary'>
          <StyledRadio value="option1" label='Option 1'>
            <Typography>{option1}</Typography>
          </StyledRadio>
          <StyledRadio value="option2" label='Option 2'>
            <Typography>{option2}</Typography>
          </StyledRadio>
        </Radio.Group>
      )}
    </StyledCard>
  )
};

export default ProductDetails;
