import React, { useContext, createContext, useState } from 'react';

interface AppContextProps {
  selectedLanguage: string;
  selectLanguage: (lang: string) => void;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppProvider: React.FC = ({ children }) => {
  const [selectedLanguage, selectLanguage] = useState('');
  return (
    <AppContext.Provider value={{ selectedLanguage, selectLanguage }}>
      {children}
    </AppContext.Provider>
  )
};

export function useAppContext(): AppContextProps {
  const context = useContext(AppContext);
  return context;
}