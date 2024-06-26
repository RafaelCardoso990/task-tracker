import { StyleSheet } from 'react-native-web';

//Import google/expo fonts
import * as Font from 'expo-font';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';

// Insert google fonts
const fetchFonts = () => {
  return Font.loadAsync({
    'gruppo-regular': require('../fonts/gruppo-Regular.ttf'),
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
    fontFamily: 'gruppo-regular',
    fontSize: 45,
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
    fontFamily: 'gruppo-regular',
    color: '#000',
    fontSize: 34,
  },
});
