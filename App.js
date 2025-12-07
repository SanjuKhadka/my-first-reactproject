import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState(''); // state to store input

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here"
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.output}>Hello, {name || 'stranger'}!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: { fontSize: 20, marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  output: { fontSize: 24, color: 'blue' },
});
