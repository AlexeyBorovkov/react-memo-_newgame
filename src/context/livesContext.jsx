import { createContext, useState } from "react";

export const LivesContext = createContext(null);

export const LivesProvider = ({ children }) => {
  const [lives, setLives] = useState(-1);

  return <LivesContext.Provider value={{ lives, setLives }}>{children}</LivesContext.Provider>;
};
