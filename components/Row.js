import React from 'react';

import { Text, Button, View, StyleSheet } from 'react-native';
import Expo, { Asset, Audio, Font, Video } from 'expo';

const styles = StyleSheet.create({
  text: {
    marginLeft: 12,
    fontSize: 16,
  }
});

export default class Row extends React.Component{
  constructor(props) {
    super(props);
  }

  playSound = async (linkSnippet) => {
    await Expo.Audio.setIsEnabledAsync(true);
    const sound = new Expo.Audio.Sound();
    await sound.loadAsync({ uri: `https://s3-us-west-2.amazonaws.com/ray-hudson-soundbites/${linkSnippet}.mp3` });
    await sound.playAsync();
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.playSound(`${this.props.data.link}`)}
          title="Play this magesterial sound!"
          color="#841584"
          accessibilityLabel="Play magesterial sound"
        />
        <Text style={styles.text}>
          {`${this.props.data.text}`}
        </Text>
      </View>
    );
  }
}
