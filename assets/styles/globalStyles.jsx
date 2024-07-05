import { StyleSheet } from 'react-native';

//Import google/expo fonts
import * as Font from 'expo-font';

// Insert google fonts
const fetchFonts = () => {
  return Font.loadAsync({
    'Poppins-Light': require('../fonts/Poppins/Poppins-Light.ttf'),
  });
};

fetchFonts();

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontFamily: 'Poppins-Light',
    fontSize: 45,
    textAlign: 'center',
    color: '#000000',
    fontWeight: 'light',
    padding: 20,
    marginBottom: 10,
  },
  h2: {
    fontFamily: 'Poppins-Light',
    fontSize: 28,
    textAlign: 'center',
    color: '#000000',
    padding: 20,
  }, 
  h3: {
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 20
  },
  h4: {
    fontFamily: 'Poppins-Light',
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
   
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
  },
  buttonText: {
    fontFamily: 'Poppins-Black',
    color: '#000',
    fontSize: 34,
  },
});
