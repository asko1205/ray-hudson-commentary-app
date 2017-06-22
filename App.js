import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Quote from './components/Quote';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Best of Ray Hudson: Football Quotes</Text>
        <Quote></Quote>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#3CDBD3',
    fontSize: 40,
    marginTop: 20
  }
});
