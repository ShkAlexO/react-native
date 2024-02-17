import { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

function useOrientation() {
    const getOrientation = () =>
        Dimensions.get('window').height > Dimensions.get('window').width
            ? 'portrait'
            : 'landscape';
            
    const [orientation, setOrientation] = useState(getOrientation());
  
    useEffect(() => {
      const updateOrientation = () => setOrientation(getOrientation());
  
      Dimensions.addEventListener('change', updateOrientation);
  
      return () => Dimensions.removeEventListener('change', updateOrientation);
    }, []);
  
    return orientation;
}

export default useOrientation;