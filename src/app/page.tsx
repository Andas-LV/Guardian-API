'use client'
import React, { createContext, useContext, ReactNode } from 'react';
import store from '../store/store';

// Создаем контекст для передачи store
const ReduxStoreContext = createContext(store);
// Создаем компонент-обертку для передачи store через контекст
interface ReduxStoreProviderProps {
  children: ReactNode;
}

function ReduxStoreProvider({ children }: ReduxStoreProviderProps) {
  return (
    <ReduxStoreContext.Provider value={store}>
      {children}
    </ReduxStoreContext.Provider>
  );
}

function MyApp() {
  const reduxStore = useContext(ReduxStoreContext);
  return (
    <div>
      <p>aaa</p>
    </div>
  );
}

export default function App() {
  return (
    <ReduxStoreProvider>
      <MyApp />
    </ReduxStoreProvider>
  );
}

