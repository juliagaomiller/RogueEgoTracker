import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Login extends React.Component {

  buttonPressed() {
    console.warn(`Button pressed!`)
  }


  render() {
    egoButtons = []
    for (i = -3; i <= 3; i++) {
      egoButtons.push(<Button key={i} onPress={this.buttonPressed} title={i.toString()}/>)
    }

    moodButtons = []
    var x = 1;
    for (i = 1; i <= 10; i++) {
      // console.warn(x)
      x++
      moodButtons.push(<Button key={i} onPress={() => this.buttonPressed} title={i.toString()} />)

    }

    return (
      <View>
        <View style={styles.firstButtonContainer}>
          {[-3,-2,-1,0,1,2,3,4].map((i) => <Button key={i} onPress={this.buttonPressed} title={i.toString()}/>)}
        </View>
        <View style={styles.secondButtonContainer}>
          {moodButtons}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  firstButtonContainer: {
    paddingTop: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  secondButtonContainer: {
    paddingTop: 200,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  }
});
