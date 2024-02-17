import { useState, useEffect } from "react";
import { Keyboard, Platform } from 'react-native';

function useKeyboard() {
    const [keyboardShown, setKeyboardShown] = useState(false);
    const [keyboardHeight, setKeyboardHeight] = useState(0);
  
    useEffect(() => {
      const keyboardDidShowListener = Keyboard.addListener(
        Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
        (event) => {
          setKeyboardShown(true);
          setKeyboardHeight(event.endCoordinates.height);
        }
      );
  
      const keyboardDidHideListener = Keyboard.addListener(
        Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
        () => {
          setKeyboardShown(false);
          setKeyboardHeight(0);
        }
      );
  
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }, []);
  
    return { keyboardShown, keyboardHeight };
  }

  export default useKeyboard;