import React, { useState } from 'react';
import { 
  KeyboardAvoidingView, 
  StyleSheet, 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity, 
  Platform 
} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([ ]);

  function handleAddTask() {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  }

  function handleCheck(id) {
    const updatedTasks = tasks.map((t, index) =>
      index === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  }

  function handleDelete(id) {
    // Remove the task with the given id
    const updatedTasks = tasks.filter((_, index) => index !== id);
    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Your tasks</Text>
        <View style={styles.items}>
          {tasks.map((item, index) => (
            <Task
              key={index}
              id={index}
              text={item.text}
              completed={item.completed}
              onCheck={handleCheck}
              onDelete={handleDelete}
            />
          ))}
        </View>
      </View>
      <KeyboardAvoidingView 
        style={styles.writeTaskWrapper}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TextInput
          style={styles.input}
          placeholder="Write your task"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 3,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
  },
  addText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold'
  },
});
