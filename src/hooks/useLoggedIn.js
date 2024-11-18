import { useContext, createContext } from "react";

const LoggedInContext = createContext();

export const useLoggedIn = () => useContext(LoggedInContext);

export function LoggedInProvider({ value, children }) {
  return (
    <LoggedInContext.Provider value={value}>
      {children}
    </LoggedInContext.Provider>
  );
}
