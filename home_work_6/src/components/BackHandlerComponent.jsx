import { Alert, BackHandler } from 'react-native';
import useBackHandler from '../hooks/useBackHandler';

const BackHandlerComponent = () => {
  useBackHandler(() => {
    Alert.alert('Confirmation', 'Do you want to exit?', [
      { text: 'Cancel', onPress: () => console.log('Cancel Pressed') },
      { text: 'OK', onPress: () => BackHandler.exitApp() }
    ]);
  });

  return null; 
};

export default BackHandlerComponent;
