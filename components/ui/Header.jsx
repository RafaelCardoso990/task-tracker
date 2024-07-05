import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header () {
  return (
    <View style={styles.container}>
      <View style={styles.rounded}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  rounded: {
    width: 80,
    height: 80,
    backgroundColor: '#d9d9d9',
    borderRadius: 100,
    marginTop: 10  
  },
  container: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#FEF9FE',     
    width:"100%",
    height: 100,   
    alignItems: 'center',
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    
  },
});

