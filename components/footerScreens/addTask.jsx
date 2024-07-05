import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddTask() {
 

  const [task, setTask] = useState({
    title: '',
    description: '',
    date: '',
    hour: '',
    user_id: '',
    priority: '',
    status: '',
  });

  function createTask() {
    const body = {
      title: 
      // description: task.description,
      // date: task.date,
      // hour: task.hour,
      // user_id: task.user_id,
      // priority: task.priority,
      // status: task.status,
    };
  }

  return (
    <View style={styles.container}>
      <View style={styles.rounded}>
        <Icon style={styles.iconTitle} name="plus" size={40} color={'#fff'} />
      </View>
      <View style={styles.content}>
        {/*quadro*/}

        {/*Title input*/}

        <Text style={styles.h3}>Title</Text>
        <Text style={styles.h4}>Enter task name</Text>
        <TextInput
          style={styles.input}
          // onChangeText={text => handleForm('password', text)}
          keyboardType="default"
          autoCapitalize="none"
          autoCompleteType="off"
          placeholderTextColor="#999"
          selectionColor="#f00"
          underlineColorAndroid="transparent"
          spellCheck={false}
          secureTextEntry={true}
        />

        {/*description input*/}

        <Text style={styles.h3}>Description</Text>
        <Text style={styles.h4}>Enter details</Text>
        <TextInput
          style={styles.input}
          // onChangeText={text => handleForm('password', text)}
          keyboardType="default"
          autoCapitalize="none"
          autoCompleteType="off"
          placeholderTextColor="#999"
          selectionColor="#f00"
          underlineColorAndroid="transparent"
          spellCheck={false}
          secureTextEntry={true}
        />

        {/*Date and hour input*/}

        <View style={styles.viewButtonHour}>
          <TouchableOpacity style={styles.secondaryButtonHour} onPress={''}>
            <Icon
              style={styles.icon}
              name="calendar"
              size={18}
              color={'#7F56DA'}
            />
            <Text style={styles.secondaryButtonText}>6/06/2024</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButtonHour} onPress={''}>
            <Icon style={styles.icon} name="gear" size={18} color={'#7F56DA'} />
            <Text style={styles.secondaryButtonText}>8:00 PM</Text>
          </TouchableOpacity>
        </View>

        {/*Priority input*/}

        <View style={styles.viewButton}>
          <Text style={styles.h4Priority}>Priority</Text>
          <TouchableOpacity style={styles.secondaryButton} onPress={''}>
            <Text style={styles.secondaryButtonText}>High</Text>
            <Icon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={''}>
            <Text style={styles.secondaryButtonText}>Medium</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={''}>
            <Text style={styles.secondaryButtonText}>Low</Text>
          </TouchableOpacity>
        </View>

        {/*Status input*/}

        <View style={styles.viewButton}>
          <Text style={styles.h4Priority}>Status</Text>
          <TouchableOpacity style={styles.secondaryButton} onPress={''}>
            <Text style={styles.secondaryButtonText}>To Do</Text>
            <Icon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={''}>
            <Text style={styles.secondaryButtonText}>Doing</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={''}>
            <Text style={styles.secondaryButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.secondaryButtonAdd} onPress={''}>
          <Text style={styles.secondaryButtonTextAdd}>Add Task</Text>
          <Icon style={styles.iconAdd} name="check" size={20} color={'#fff'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rounded: {
    width: 70,
    height: 70,
    backgroundColor: '#7F56DA',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  content: {
    width: '90%',
    backgroundColor: '#D8CEED',
    borderRadius: 5,
    marginTop: 100,
  },
  text: {
    fontFamily: 'poppins',
    fontSize: 20,
  },
  label: {
    fontFamily: 'Poppins-Light',
    fontSize: 20,
    color: '#000000',
    marginBottom: 20,
  },
  input: {
    fontFamily: 'poppins',
    fontSize: 20,
    border: 2,
    width: '95%',
    height: 45,
    marginLeft: 5,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    textDecorationLine: 'none',
  },
  h3: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: '#000000',
    margin: 5,
  },
  h4: {
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    color: '#000000',
    margin: 5,
  },
  h4Priority: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#000000',
    margin: 5,
  },
  viewButton: {
    flexDirection: 'row',
    padding: 4,
  },
  viewButtonHour: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    marginTop: 30,
    marginBottom: 30,
  },
  secondaryButton: {
    backgroundColor: '#fff',
    width: 120,
    height: 20,
    borderRadius: 35,
    margin: 2,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  secondaryButtonAdd: {
    backgroundColor: '#7F56DA',
    width: 120,
    height: 40,
    borderRadius: 35,
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  secondaryButtonHour: {
    width: 100,
    height: 30,
    backgroundColor: '#fff',
    borderRadius: 35,
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  secondaryButtonText: {
    fontFamily: 'Poppins-Light',
    color: '#000',
    fontSize: 14,
    alignItems: 'center',
  },
  secondaryButtonTextAdd: {
    fontFamily: 'Poppins-Bold',
    color: '#fff',
    fontSize: 18,
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    left: 10,
  },
  iconAdd: {
    position: 'absolute',
    right: 130,
  },
  iconTitle: {},
});
