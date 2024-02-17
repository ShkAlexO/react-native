import { useEffect } from 'react';
import { BackHandler } from 'react-native';

function useBackHandler(callback) {
    useEffect(() => {
      const backHandler = () => {
        callback();
        return true;
      };
  
      const backHandlerSubscription = BackHandler.addEventListener(
        'hardwareBackPress',
        backHandler
      );
  
      return () => {
        backHandlerSubscription.remove();
      };
    }, [callback]);
}

export default useBackHandler;