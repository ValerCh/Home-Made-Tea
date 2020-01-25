import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function IntroScreen() {
  return (
    <View style={styles.container}>
      <Text>Intro Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
