import React from 'react';
import styled from '@emotion/styled';
import { Button, Card, Chip, ChipList, Radio, Typography } from '../../ui-components';

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

const StyledRadio = styled(Radio)({
  marginTop: 16,
  marginBottom: 10,
});

const StyledDescription = styled(Typography)({
  marginBottom: 16,
})


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

      <StyledDescription>
        Foxit Software PhantomPDF Business provides powerful PDF Editor capabilities to allow authors to update their documents themselves.
      </StyledDescription>

      <Radio.Group name="product_options" activeValue='option1' labelColor='darkGrey' activeColor='secondary'>
        <StyledRadio value="option1" label='Option 1'>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
        </StyledRadio>
        <StyledRadio value="option2" label='Option 2'>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</Typography>
        </StyledRadio>
      </Radio.Group>

    </StyledCard>
  )
};

export default ProductDetails;
