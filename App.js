/*
* File: app.java
* Author: Takács Dániel
* Copyright: 2024, Takács Dániel 
* Group: I/2/N
* Date: 2024-02-28
* Github: https://github.com/danieltakacs1
* Licenc: GNU GPL
*/

import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react';

export default function App() {

  const [Weight, setWeight] = useState('');
  const [Height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const weight = (text) => {
    setWeight(text);
  };

  const height = (text) => {
    setHeight(text);
  };

  const handleDivideBySquare = () => {
    const weight1 = parseFloat(Weight);
    const height1 = parseFloat(Height);

    if (isNaN(weight1) || isNaN(height1)) {
      setResult('Érvénytelen bemenet');
    } else {
      const squaredHeight = height1 * height1;

      if (squaredHeight === 0) {
        setResult('A négyzet értéke nem lehet nulla');
      } else {
        const divisionResult = weight1 / squaredHeight;
        setResult(`${divisionResult}`);
      }
    }
  };

  return (
    <View style={styles.container}>

      <view>
      <Text  style = {styles.head}>Testtömegindex</Text>
      </view>

      <view style = {styles.body}>

      <TextInput style ={styles.input}
      placeholder="Ide írd a testtömeged!"
      onChangeText={weight}
      value={Weight}
      keyboardType="numeric"
      />

      <TextInput style ={styles.input}
      placeholder="Ide írd a testmagasságodat!"
      onChangeText={height}
      value={Height}
      keyboardType="numeric"
      />

      <Pressable onPress={handleDivideBySquare} style={styles.button}>
        <Text style={styles.buttonText}>Számít</Text>
      </Pressable>


      {result && <Text style={styles.label}>{result}</Text>}

      <StatusBar style="auto" />
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: 'red',
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    color: 'red',
    fontSize: 50,
    margin: 20,
    alignItems: 'center',
  },
  label: {
    color: 'red',
    fontSize: 20,
  },
  input: {
    backgroundColor: 'red',
    margin: 8,
    height: 40,
    width:'100%',
    fontSize: 20,
  },
  button: {
    margin: 10,
    alignItems: 'center',
    width:'100%',
  },
  buttonText: {
    color: 'red',
    backgroundColor: 'black',
    fontSize: 20,
  },
});