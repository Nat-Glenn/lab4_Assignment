import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export interface ToDoFormProps {
  addTask: (task: string) => void;
}

const ToDoForm: React.FC<ToDoFormProps> = ({ addTask }) => {
  const [taskText, setTaskText] = useState<string>('');

  const handleAddPress = (): void => {
    const trimmed = taskText.trim();
    if (!trimmed) return;
    addTask(trimmed);
    setTaskText('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        value={taskText}
        onChangeText={setTaskText}
      />
      <Button title="Add Task" onPress={handleAddPress} />
    </View>
  );
};

export default ToDoForm;

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});
