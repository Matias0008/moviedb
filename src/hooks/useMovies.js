import { useEffect, useState } from "react";

export const useMovies = (url) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getFetch = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setResults((prev) => [...prev, ...data.results]);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    getFetch();
    return () => controller.abort();
  }, [url]);

  return {
    results,
    isLoading,
  };
};
