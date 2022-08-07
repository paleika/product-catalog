import React from 'react';
import styled from '@emotion/styled';
import { Button, Card, Chip, ChipList, Input, Radio, Typography } from '../../ui-components';
import { usePCStore } from '../../store/context';
import { observer } from 'mobx-react-lite';
import { ProductShape } from '../../types/products';
import { PCStore } from '../../store';

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
});

const StyledInput = styled(Input)({
  marginBottom: 18,
});

const StyledActionsBox = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 8,
})

interface ActionBoxProps {
  handlePrimaryAction: () => void;
  handleSecondaryAction?: () => void;
  primaryLabel: string;
  secondaryLabel?: string;
}

const ActionsBox = ({ primaryLabel, secondaryLabel, handlePrimaryAction, handleSecondaryAction }: ActionBoxProps) => {
  return (
    <StyledActionsBox>
      {handleSecondaryAction && (
        <Button handleClick={handleSecondaryAction} variant="secondary">{secondaryLabel || "Cancel"}</Button>
      )}
      <Button handleClick={handlePrimaryAction}>{primaryLabel}</Button>
    </StyledActionsBox>
  )
}

const ProductDetailsData = observer(({ setEditing, product }: { setEditing: Function, product: ProductShape | undefined }) => {
  if (product === undefined) {
    return null;
  }

  const { option1, option2 } = product;

  const handleEdit = () => setEditing(true);

  return (
    <>
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

      <ActionsBox primaryLabel='Edit' handlePrimaryAction={handleEdit} />
    </>
  )
});

const ProductDetailsForm = ({ setEditing, store }: { setEditing: Function, store: PCStore }) => {
  const product = store.getProductById(store.selectedProductId);

  const [name, setName] = React.useState(product?.productName || '');

  if (product === undefined) {
    return null;
  }

  const handleCancel = () => setEditing(false);

  const handleSave = () => {
    store.updateProductById(product.id, { ...product, productName: name });
    setEditing(false);
  }

  return (
    <>
      <StyledInput
        handleChange={setName}
        defaultValue={product.productName}
      />
      <ActionsBox
        primaryLabel='Save'
        handlePrimaryAction={handleSave}
        secondaryLabel='Cancel'
        handleSecondaryAction={handleCancel}
      />
    </>
  )
}

const ProductDetailsCard = () => {
  const [editing, setEditing] = React.useState(false);
  const store = usePCStore();

  return (
    <StyledCard>
      <Card.Header>
        <Typography variant='h2'>Product Details</Typography>
      </Card.Header>
      {editing
        ? <ProductDetailsForm setEditing={setEditing} store={store} />
        : <ProductDetailsData setEditing={setEditing} product={store.getProductById(store.selectedProductId)} />
      }
    </StyledCard>
  )
};

export default observer(ProductDetailsCard);
