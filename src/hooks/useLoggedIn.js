import { useState, useContext, createContext } from "react";

const LoggedInContext = createContext();

export const useLoggedIn = () => useContext(LoggedInContext);

export function LoggedInProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <LoggedInContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoggedInContext.Provider>
  );
}
