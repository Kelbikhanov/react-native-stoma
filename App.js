import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

  return (
    <View>
      <Navbar/>
      <View style={styles.container}>
      <AddToDo onSubmit={addTodo} />

      <View>
      {todos.map(todo => ( <ToDo todo={todo} key={todo.id} /> ))}
      </View>

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
