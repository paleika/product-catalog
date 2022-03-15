import React from 'react';
import { Provider } from 'react-redux';
import { Global } from '@emotion/react';

import globalStyles from './styles/global';
import { Container } from './ui-components';
import Title from './layout/title';

import store from './store';

const App = () => (
  <Provider store={store}>
    <Global styles={globalStyles} />
    <Container>
      <Title />
      {/* <Tabs />
      <Catalog />
      <Product /> */}
    </Container>
  </Provider>
)

export default App;
