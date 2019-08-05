/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import OneSignal from 'react-native-onesignal'; // Import package from node modules

export default class App extends Component {

constructor(properties) {
    super(properties);
    OneSignal.init("75580a21-7211-49b7-8439-c7f380b40e0e");

    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.configure(); 	// triggers the ids event
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    alert("Notification received: ", notification);
  }

  onOpened(openResult) {
    alert('Message: ', openResult.notification.payload.body);
    alert('Data: ', openResult.notification.payload.additionalData);
    alert('isActive: ', openResult.notification.isAppInFocus);
    alert('openResult: ', openResult);
  }

  onIds(device) {
    alert('Device info: ', device);
  }

  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>REACT WITH ONE SIGNAL!</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

//export default App;
