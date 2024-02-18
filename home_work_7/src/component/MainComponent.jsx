import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodoData } from '../todoSlice';

const MainComponent = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.data);
  const loading = useSelector(state => state.todos.status === 'loading');
  const error = useSelector(state => state.todos.error);

  useEffect(() => {
    dispatch(fetchTodoData());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.listItem}>
      <Text><Text style={{ fontWeight: 'bold' }}>Title:</Text> {item.title}</Text>
      <Text><Text style={{ fontWeight: 'bold' }}>Completed:</Text> {item.completed ? 'Yes' : 'No'}</Text>
      <Text><Text style={{ fontWeight: 'bold' }}>Rating:</Text> {item.rating}</Text>
    </View>
  );

  return (
    <View>
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <View style={styles.container}>
          <FlatList
            data={todos}
            renderItem={renderItem}
            ListHeaderComponent={() => <Text style={styles.listTitle}>Todo List:</Text>} 
          />
        </View>
      )}
      <Button
        title="Refresh Todo Data"
        onPress={() => dispatch(fetchTodoData())}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    paddingTop: 100,
    flex: 1, 
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center'
  }, 
  listTitle: { 
    fontWeight: 'bold', 
    fontSize: 20,
    marginBottom: 10 
  },
  listItem: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  }
});

export default MainComponent;
