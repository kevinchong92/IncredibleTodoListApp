/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react';

function App() {

  const taskList = [
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ];

  const [tasks, setTasks] = useState(taskList);

  const addTask = (taskText) => {
    if (taskList.includes(taskText)) {
      return alert('Task already exists!');
    }
    if (taskText === '') {
      return alert('Task cannot be empty!');
    }
    setTasks([...tasks, taskText]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}


export default App;
