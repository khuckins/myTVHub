import { useCallback, useState } from "react";
import axios from "axios";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (request: any, applyDataFn: any) => {
    setIsLoading(true);
    setError(null)
    console.log(request)

    try {
      const [newShows] = await Promise.all([
        axios.get(request.url),
      ]);

      if (!newShows) {
        throw new Error('Request failed!');
      }

      applyDataFn(newShows.data.MediaContainer.Metadata);
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
    }
    
    setIsLoading(false)
  }, []);

  return {
    isLoading, error, sendRequest
  }
};

export default useHttp