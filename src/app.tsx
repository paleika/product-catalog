import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

interface AppProps {
  name: string;
}
const App = (props: AppProps) => (
  <Provider store={store}>
    <h1>Hello, {`${props.name}!`}</h1>
  </Provider>
)

export default App;
