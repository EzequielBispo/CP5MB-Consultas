import { useState, useContext, createContext } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState({
    consultas: [], // Exemplo de estado global
    user: null
  });

  const value = { state, setState };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};