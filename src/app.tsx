import React from 'react';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import globalStyles from './styles/global';
import { Button, Card, Checkbox, Container, Typography } from './ui-components';
import Title from './layout/title';

import store from './store';
import ProductCard from './layout/product-card';
import ProductDetails from './layout/product-details';

const App = () => (
  <Provider store={store}>
    <Global styles={css`${emotionReset}`} />
    <Global styles={globalStyles} />
    <Container>
      <Title />
      <Card fullWidth>
        <Card.Header>
          <Typography variant='h2'>I'm looking for...</Typography>
        </Card.Header>
        <Button handleClick={() => console.log('hooray')}>Go click me</Button>
      </Card>
      <div style={{ height: 24 }} />
      <ProductCard />
      <div style={{ height: 24 }} />
      <ProductDetails />
      <div style={{ height: 24 }} />
      <Card>
        <Checkbox label="Enable sleeping mode" />
        <div style={{ height: 12 }} />
        <Checkbox label="Get food" labelVariant='action1' labelColor='darkGrey' />
      </Card>


      {/* <Tabs />
      <Catalog />
      <Product /> */}
    </Container>
  </Provider>
)

export default App;
