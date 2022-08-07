import React from 'react';
import store, { PCStore } from './index';

const PCStoreContext = React.createContext<PCStore>(store);

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
