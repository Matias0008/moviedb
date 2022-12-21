import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [fetchState, setFetchState] = useState({
    data: [],
    isLoading: true,
  });

  const getFetch = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setFetchState({
      data,
      isLoading: false,
    });
  };

  useEffect(() => {
    setFetchState({ ...fetchState, isLoading: true });
    getFetch();
  }, [url]);

  return fetchState;
};
