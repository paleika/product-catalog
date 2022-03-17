import React from 'react';
import styled from '@emotion/styled';
import { Button, Card, Chip, ChipList, Typography } from '../ui-components';

const StyledCard = styled(Card)({
  width: 320,
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

const ProductDetails = () => {
  return (
    <StyledCard>
      <Card.Header>
        <Typography variant='h2'>Product Details</Typography>
      </Card.Header>

      <StyledTitle variant='h3'>Adobe Illustrator</StyledTitle>

      <StyledChipList>
        <Chip label="PDF" />
        <Chip label="Business" />
        <Chip label="Maintenance" />
        <Chip label="Create" />
        <Chip label="Something long" />
      </StyledChipList>

      <StyledButton handleClick={() => null}>Go to Manufacturer</StyledButton>

      <Typography>
        Foxit Software PhantomPDF Business provides powerful PDF Editor capabilities to allow authors to update their documents themselves.
      </Typography>



    </StyledCard>
  )
};

export default ProductDetails;
