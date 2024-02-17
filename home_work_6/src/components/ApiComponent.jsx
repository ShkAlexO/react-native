import React from 'react';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import useApi from '../hooks/useApi';

const ApiComponent = () => {
  const apiUrl = "https://64fdb2d8596493f7af7e766e.mockapi.io/todo"; 

  const { data, error, loading } = useApi(apiUrl);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}> 
        <Text>There was an error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>   
      <Text>Data: {JSON.stringify(data)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        padding: 20,
        borderWidth: 1, 
        borderColor: 'black',
    },
  });

export default ApiComponent;
