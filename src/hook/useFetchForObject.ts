import { useEffect, useState } from "react";

function useFetchForObject<T>(url: string) {
  const [data, setData] = useState<T | {}>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | {}>({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError({});
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError((error as Error).message);
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetchForObject;
