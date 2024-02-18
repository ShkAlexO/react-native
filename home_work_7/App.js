import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';  
import MainComponent from './src/component/MainComponent';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <MainComponent />
      </Provider>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

export default App;
