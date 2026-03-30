import { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalContextType {
  activeStarId: string | null;
  setActiveStarId: (id: string | null) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [activeStarId, setActiveStarId] = useState<string | null>(null);

  return (
    <GlobalContext.Provider value={{ activeStarId, setActiveStarId }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("useGlobalState must be used within GlobalProvider");
  return context;
};