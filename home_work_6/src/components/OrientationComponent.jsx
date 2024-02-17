import { StyleSheet, View, Text } from 'react-native';
import useOrientation from '../hooks/useOrientation';

function Orientation() {
  const orientation = useOrientation();

  return (
    <View style={styles.container}>
        <Text>Orientation: {orientation}</Text>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
      width: '80%',
      padding: 20,
      borderWidth: 1, 
      borderColor: 'black',
  },
});

export default Orientation