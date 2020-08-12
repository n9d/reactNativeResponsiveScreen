import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Create React Native Web App</Text>
        <Text style={styles.text}>
          Open up src/App.js to start working on your app!
        </Text>
        <Text style={styles.text}>
          Changes you make will automatically reload.
        </Text>
        <View style={styles.textWrapper}>
          <Text style={styles.myText}>Login</Text>
          <Button
          onPress={()=>{console.log("pressed")}}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    color: '#fff',
  },
  button: {
    borderRadius: 3,
    padding: 20,
    marginVertical: 10,
    marginTop: 10,
    backgroundColor: '#1B95E0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container2: { flex: 1 },
  textWrapper: {
    height: hp('70%'),  // 70% of height device screen
    width: wp('80%'),   // 80% of width device screen
  },
  myText: {
    fontSize: hp('5%'), // End result looks like the provided UI mockup
  },
});

export default App;
