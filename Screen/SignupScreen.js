import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

//Global Style import
import globalStyles from '../assets/styles/globalStyles';

{
  /* TODO make erros*/
}

export default function SignupScreen({ navigation }) {
  const handlePress = () => {
    Alert.alert('Bler', 'bler');
  };

  return (
    <View style={globalStyles.container}>
      <View style={styles.rounded}></View>
      <Text style={globalStyles.h1}>Let's get started!</Text>
      {/*inputs*/}
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          // onChangeText={handleInputChange}
          // value={inputText}
          keyboardType="default"
          autoCapitalize="none"
          autoCompleteType="off"
          placeholderTextColor="#999"
          selectionColor="#f00"
          underlineColorAndroid="transparent"
          spellCheck={false}
        />
        <Text style={styles.label}>Email</Text>
        <Icon style={styles.icon} name="check" size={20} color={'#000'} />
      </View>
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          // onChangeText={handleInputChange}
          // value={inputText}
          keyboardType="default"
          autoCapitalize="none"
          autoCompleteType="off"
          placeholderTextColor="#999"
          selectionColor="#f00"
          underlineColorAndroid="transparent"
          spellCheck={false}
        />
        <Text style={styles.label}>Password</Text>
        <Icon style={styles.icon} name="lock" size={20} color={'#000'} />
      </View>
      {/* TODO make a repository to login*/}
      <TouchableOpacity style={globalStyles.button} onPress={handlePress}>
        <Text style={globalStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={globalStyles.h2}>or Sign up with</Text>
      {/* TODO make login if facebook and Gmail*/}
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.secondaryButton} onPress={handlePress}>
          <Text style={styles.secondaryButtonText}>facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={handlePress}>
          <Text style={styles.secondaryButtonText}>Gmail</Text>
        </TouchableOpacity>
      </View>
      {/* TODO navigate to signUP*/}
      <Text
        style={globalStyles.h2}
        onPress={() => navigation.navigate('Login')}
      >
        Already an account? Log in!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rounded: {
    width: 136,
    height: 136,
    backgroundColor: '#d9d9d9',
    borderRadius: 100,
    marginBottom: 30,
  },
  label: {
    fontFamily: 'gruppo-regular',
    fontSize: 17,
    color: '#000000',
    marginLeft: 30,
    bottom: 59,
    width: '100%',
    padding: 2,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  input: {
    fontFamily: 'gruppo-regular',
    fontSize: 20,
    border: 2,
    width: 320,
    height: 45,
    borderRadius: 25,
    borderWidth: 1,
    paddingHorizontal: 20,
    textDecorationLine: 'none',
  },
  icon: {
    bottom: 34,
    left: 290,
    width: '100%',
    position: 'absolute',
  },
  viewButton: {
    flexDirection: 'row',
  },
  secondaryButton: {
    backgroundColor: '#F47B61',
    width: 120,
    height: 20,
    borderRadius: 35,
    margin: 2,
  },
  secondaryButtonText: {
    fontFamily: 'gruppo-regular',
    color: '#000',
    fontSize: 18,
    textAlign: 'center',
  },
});
