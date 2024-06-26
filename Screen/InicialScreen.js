import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import * as Font from 'expo-font';

// Insert google fonts
const fetchFonts = () => {
  return Font.loadAsync({
    'gruppo-regular': require('../assets/fonts/gruppo-Regular.ttf'),
  });
};

export default function InicialScreen({navigation}) {
  // call google fonts
  fetchFonts();

  const handlePress = () => {
    navigation.navigate('Login')
  };

  return (
    <View style={styles.container}>
      {/* TODO colocar imagem ou escrita da logo  */}
      <View style={styles.div}>
        <View style={styles.rounded}></View>
        <Text style={styles.h1}>GET THINGS DONE</Text>
        <Text style={styles.h2}>
          Do it Now will help you stay organized and perform your task much
          faster in smart way
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Get stated</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2B1E8',
    alignItems: 'center',
    justifyContent: 'space-evenly',   
  },
  div: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rounded: {
    width: 136,
    height: 136,
    backgroundColor: '#d9d9d9',
    borderRadius: 100,
    marginBottom: 30,
  },
  h1: {
    fontFamily: 'gruppo-regular',
    fontSize: 54,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'light',
    padding: 20,
    marginBottom: 10,
  },
  h2: {
    fontFamily: 'gruppo-regular',
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
    padding: 20,
    marginBottom: 80,
  },
  button: {
    backgroundColor: '#F47B61',
    paddingVertical: 16,
    paddingHorizontal: 120,
    borderTopEndRadius: 30,
    borderBottomEndRadius: 30,
    borderTopStartRadius: 30,
  },
  buttonText: {
    fontFamily: 'gruppo-regular',
    color: '#000',
    fontSize: 34,
  },
});
