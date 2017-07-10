import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Quote from './components/Quote';

import Expo, { Asset, Audio, Font, Video } from 'expo';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this._loadNewPlaybackInstance();
  }

  async _loadNewPlaybackInstance() {
    if (this.playbackInstance != null) {
      await this.playbackInstance.unloadAsync();
      this.playbackInstance.setCallback(null);
      this.playbackInstance = null;
    }

    const source = { uri: "https://s3-us-west-2.amazonaws.com/ray-hudson-soundbites/01matadorinhighheels.mp3" };
    const sound = new Expo.Audio.Sound({
      source: source.uri
    });
    this.playbackInstance = sound;
  }

  _onPlayPausePressed = () => {
  console.log("hi there")
   if (this.playbackInstance != null) {
     this.playbackInstance.loadAsync();
      this.playbackInstance.setPositionAsync(0)
      this.playbackInstance.playAsync();
   }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Best of Ray Hudson: Football Quotes</Text>
        <Button
          onPress={this._onPlayPausePressed}
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
