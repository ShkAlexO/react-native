import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, Platform } from 'react-native';
import useKeyboard from '../hooks/useKeyboard';

const KeyboardComponent = () => {
  const { keyboardShown, keyboardHeight } = useKeyboard();

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <Text>Keyboard is {keyboardShown ? 'visible' : 'hidden'}</Text>
      <TextInput style={styles.input} placeholder="Type something..."/>

      {keyboardShown && <Text>Keyboard Height: {keyboardHeight}</Text>}
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
    container: {
        width: '80%',
        padding: 20,
        borderWidth: 1, 
        borderColor: 'black',
    },
    input: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      marginVertical: 20,
      paddingHorizontal: 10,
    },
});

export default KeyboardComponent;
