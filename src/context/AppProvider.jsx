import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

export const AppProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("The Movie Database (TMDB)");

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <AppContext.Provider
      value={{
        setPageTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
