import React, { Component} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class LoginForm extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Thoughts</Text>
        <TextInput
          style={styles.input}
          placeholder="What are you thinking right now?"
          placeholderTextColor = 'white'
        />
        <Text>Activities</Text>
        <TextInput
          style={styles.input}
          placeholder="What activities are you doing?"
          placeholderTextColor = 'white'
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: 'darkblue',
    paddingVertical: 15
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700'
  }
})
