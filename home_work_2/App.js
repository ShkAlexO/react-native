import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native';
import Card from './src/components/Card';
import mockItemData from './src/data/mockItemData';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <Card mockItemData={mockItemData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  wrap: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#cccbc9',
  }
})
