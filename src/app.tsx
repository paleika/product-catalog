import React from 'react';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import globalStyles from './styles/global';
import { Container, Tabs } from './ui-components';
import Title from './layout/title';

import store from './store';
import Products from './layout/products';

const App = () => (
  <Provider store={store}>
    <Global styles={css`${emotionReset}`} />
    <Global styles={globalStyles} />
    <Container>
      <Title />

      <Tabs activeValue="product">
        <Tabs.Panel value="product">
          <Products />
        </Tabs.Panel>
        <Tabs.Panel value="addresses" disabled>
          <div />
        </Tabs.Panel>
        <Tabs.Panel value="overview" disabled>
          <div />
        </Tabs.Panel>
      </Tabs>
    </Container>
  </Provider>
)

export default App;
