// app/index.tsx
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

const Index: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText: string): void => {
    const trimmed = taskText.trim();
    if (!trimmed) return;

    if (tasks.includes(trimmed)) return;

    setTasks(prevTasks => [...prevTasks, trimmed]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});





