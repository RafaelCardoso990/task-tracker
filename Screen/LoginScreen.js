import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as Font from 'expo-font';
import Input from '../components/ui/input';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.rounded}></View>
      <Input text="Email"/>
      <Input text="Password"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2B1E8',
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
  label: {
    fontFamily: 'gruppo-regular',
    fontSize: 25,
    color: '#000000',  
  },
  input: {
    fontFamily: 'gruppo-regular',
    fontSize: 25,
    backgroundColor: 'pink',
    border: 2,
    width: 300,
    height:35,
    borderRadius: 35,
    
  },
});
