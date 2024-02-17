import { useEffect, useState } from 'react';

function useApi(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const controller = new AbortController();
      const { signal } = controller;
  
      const fetchData = async () => {
        try {
          const response = await fetch(url, { signal });
          const jsonData = await response.json();
          setData(jsonData);
        } catch (err) {
          if (err.name === 'AbortError') return;
          setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
  
      return () => {
        controller.abort();
      };
    }, [url]);
  
    return { data, error, loading };
}

export default useApi;