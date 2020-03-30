import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {Navbar} from './src/Navbar';
import { AddToDo } from './src/AddToDo';
import { ToDo } from './src/ToDo';

export default function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    }

    setTodos(prev => [...prev, {
      id: Date.now().toString(),
      title
    }])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      <Navbar/>
      <View style={styles.container}>
      <AddToDo onSubmit={addTodo} />

      <FlatList
      keyExtractor={item => item.id.toString()}
      data={todos}
      renderItem={({item}) => <ToDo todo={item} onRemove={removeTodo} />}
      />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
