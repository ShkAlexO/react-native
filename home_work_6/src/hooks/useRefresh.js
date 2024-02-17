import { useState } from 'react';

function useRefresh(callback) {
    const [isRefreshing, setIsRefreshing] = useState(false);
  
    const onRefresh = async () => {
      setIsRefreshing(true);
      await callback();
      setIsRefreshing(false);
    };
  
    return { isRefreshing, onRefresh };
}

export default useRefresh;