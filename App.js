import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [firstName, setFirstName] = useState(''); // state to store input 
  const [lastName, setLastName] = useState(''); 
  const [age, setAge] = useState('');
 
  return (
    <View style={styles.flow}>
       {/* First Name Row */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Text style={styles.title}>First Name :</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter your first name"
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />
      {/* <Text style={styles.output}>Hello, {name || 'Jhon'}!</Text> */}
    </View>

    {/* Last Name Row */}
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <Text style={styles.title}>Last Name :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your last name"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />
    </View>
    {/* Age Row */}
    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <Text style={styles.title}>Age :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        value={age}
        onChangeText={text => setAge(text)}
      />
    </View>
    {/* output */}
    <Text style={styles.output}>
      Hello, {firstName || 'Nia '} {lastName || 'Sharma'} you are {age || '25'} years old.</Text>
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  flow: {
    padding: 20,
      },
  title: { 
    fontSize: 20,
    color: 'blue', 
    fontWeight: 'bold',
    width: 150,     // Fixed width so text aligns properly
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    color: 'blue',
    foreweight: 'bold',
    fontSize: 18,
    // flex: 1,        // Make input take available space
  },
  output: { fontSize: 20, 
    fontWeight: 'bold', 
    color: 'red' },
  
});
