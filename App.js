import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Quote from './components/Quote';

import Expo, { Asset, Audio, Font, Video } from 'expo';


export default class App extends React.Component {

  playSound = async (linkSnippet) => {
    await Expo.Audio.setIsEnabledAsync(true);
    const sound = new Expo.Audio.Sound();
    await sound.loadAsync({ uri: `https://s3-us-west-2.amazonaws.com/ray-hudson-soundbites/${linkSnippet}.mp3` });
    await sound.playAsync();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Best of Ray Hudson: Football Quotes</Text>
        <Button
          onPress={() => this.playSound('01matadorinhighheels')}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Quote />
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
