import React from 'react';
import styled from '@emotion/styled';
import { Card, Chip, ChipList, Typography } from '../../ui-components';

const StyledWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
})

const StyledContent = styled.div({
  flexGrow: 1,
})

const StyledTitle = styled(Typography)({
  marginBottom: 8,
});

const StyledSubtitle = styled(Typography)({
  whiteSpace: 'nowrap',
  marginLeft: 16,
})

const ProductCard = () => {
  return (
    <Card fullWidth>
      <StyledWrapper>
        <StyledContent>
          <StyledTitle variant='h3'>Adobe Illustrator</StyledTitle>
          <ChipList>
            <Chip label="PDF" />
            <Chip label="Business" />
            <Chip label="Maintenance" />
            <Chip label="Create" />
            <Chip label="Something long" />
            <Chip label="Another" />
            <Chip label="Editor" />
            <Chip label="Vemiam" />
            <Chip label="SED" />
            <Chip label="Aliqua" />
          </ChipList>
        </StyledContent>
        <div>
          <StyledSubtitle variant='subtitle' color="darkGrey">Daily Business</StyledSubtitle>
        </div>
      </StyledWrapper >
    </Card>
  )
};

export default ProductCard;
