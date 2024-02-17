import { SafeAreaView, Platform, StyleSheet } from 'react-native';
import OrientationComponent from './src/components/OrientationComponent';
import BackHandlerComponent from './src/components/BackHandlerComponent';
import KeyboardComponent from './src/components/KeyboardComponent';
import RefreshComponent from './src/components/RefreshComponent';
import ApiComponent from './src/components/ApiComponent';

export default App = () => {
  const isAndroid = Platform.OS === 'android';

  return ( 
    <SafeAreaView style={styles.container}>
      <OrientationComponent />
      { isAndroid && <BackHandlerComponent /> } 
      <KeyboardComponent />
      <RefreshComponent />
      <ApiComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'center', 
    rowGap: 20, 
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  }
});