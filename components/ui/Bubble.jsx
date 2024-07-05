import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Bubble({bubbleStyle, positionStyle}) {

  return (
    <LinearGradient
      colors={['#C2B1E8', '#E2D9F3', '#ffffff']}
      style={[styles.box, bubbleStyle, positionStyle]}
    >
      <View style={styles.content}></View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 350,
    height: 350,
    borderRadius: 400,
    zIndex: -1
  }, 
});
