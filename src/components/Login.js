import React, { Component} from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class Login extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../images/dolphin.png')}
          />
        </View>
        <Text>Hello!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightskyblue'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100
  }
})
