import { createStore, compose } from 'redux';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';

import reducer from './reducer';
import { State } from './types';

const composer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composer());

const useStateSelector: TypedUseSelectorHook<State> = useSelector;
const useStateDispatch = () => useDispatch<typeof store.dispatch>();

export default store;
export {
  useStateDispatch as useDispatch,
  useStateSelector as useSelector,
};
