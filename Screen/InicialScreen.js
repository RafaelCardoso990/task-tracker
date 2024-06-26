import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';

import globalStyles from '../assets/styles/globalStyles';

export default function InicialScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={globalStyles.container}>
      {/* TODO colocar imagem ou escrita da logo  */}
      <View style={styles.div}>
        <View style={styles.rounded}></View>
        <Text style={globalStyles.h1}>GET THINGS DONE</Text>
        <Text style={globalStyles.h2}>
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
  button: {
    backgroundColor: '#fef5fd',
    height: 40,
    width: 370,
    borderTopEndRadius: 30,
    borderBottomEndRadius: 30,
    borderTopStartRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginTop: 100
  },
  buttonText: {
    fontFamily: 'gruppo-regular',
    color: '#000',
    fontSize: 34,
  },
});
