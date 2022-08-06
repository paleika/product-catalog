import React from 'react';
import store, { Store } from './index';

const PCStoreContext = React.createContext<Store>(store);

const usePCStore = () => React.useContext(PCStoreContext);

const PCStoreProvider = ({ children }: React.PropsWithChildren<{}>) => (
  <PCStoreContext.Provider value={store}>
    {children}
  </PCStoreContext.Provider>
);

export {
  PCStoreProvider,
  usePCStore,
}
