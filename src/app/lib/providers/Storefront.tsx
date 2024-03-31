import { createContext } from "react";

export const StorefrontContext = createContext({});

export const StorefrontProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StorefrontContext.Provider value={{}}>
      {children}
    </StorefrontContext.Provider>
  );
}