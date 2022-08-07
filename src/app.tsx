import React from 'react';
import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import globalStyles from './styles/global';
import { Container, Tabs } from './ui-components';
import Title from './layout/title';

import { PCStoreProvider } from './store/context';
import Products from './layout/products';

const App = () => (
  <PCStoreProvider>
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
  </PCStoreProvider>
)

export default App;
