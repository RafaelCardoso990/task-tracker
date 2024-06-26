import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default function Input(props){
    //TODO colocar svgs
  return (
    <View style={styles.inputArea}>
        <TextInput style={styles.input}
          // style={styles.input}
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
      <Text style={styles.label}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({  
    inputArea:{
        
    },
    label: {
      fontFamily: 'gruppo-regular',
      fontSize: 17,
      color: '#000000',
      marginLeft: 30,
      bottom: 59,
      width:'100%',
      padding: 2,
      backgroundColor: "#C2B1E8",
      textAlign: "center"
    },
    input: {
        fontFamily: 'gruppo-regular',
        fontSize: 20,
        border: 2,
        width: 320,
        height:45,
        borderRadius: 25,      
        borderWidth: 1,       
        paddingHorizontal: 20,
        textDecorationLine: 'none',
    },
  });
  