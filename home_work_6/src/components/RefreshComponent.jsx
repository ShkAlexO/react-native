import React, { useState } from 'react';
import {  StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';
import useRefresh from '../hooks/useRefresh';

const API = "https://64fdb2d8596493f7af7e766e.mockapi.io/todo";


const RefreshComponent = () => {
    const [data, setData] = useState(null); 

    const fetchData = async () => {
      const response = await fetch(API);
      const newData = await response.json();
      setData(newData);
    };
  
    const { isRefreshing, onRefresh } = useRefresh(fetchData);
  
    return (
      <View style={styles.container}>
        {data ? (
          <View>
            <Text>Data: {JSON.stringify(data)}</Text>
          </View>
        ) : (
          <Button title="Update data" onPress={onRefresh} />
        )}
  
        {isRefreshing && <ActivityIndicator size="large" color="#0000ff" />}
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

export default RefreshComponent