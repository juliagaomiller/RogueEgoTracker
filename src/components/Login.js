import React, { Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Login extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Hello!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightskyblue'
  }
})
