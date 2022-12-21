import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};
