import { createContext, useState } from "react";

export const LevelContext = createContext(null);

export const LevelProvider = ({ children }) => {
  const [level, setLevel] = useState(0);

  return <LevelContext.Provider value={{ level, setLevel }}>{children}</LevelContext.Provider>;
};
