import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TasksByCalendar() {
  return (
    <View style={styles.container}>
      <View style={styles.rounded}>
        <Icon style={styles.iconTitle} name="plus" size={40} color={'#fff'} />
      </View>
      <View style={styles.content}>
        {/*quadro*/}
        {/*Sort By Calendar*/}
        <View style={styles.viewButton}>
          <TouchableOpacity style={styles.secondaryButton} onPress={''}>
            <Text style={styles.secondaryButtonText}>Week</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={''}>
            <Text style={styles.secondaryButtonText}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.secondaryButton} onPress={''}>
            <Text style={styles.secondaryButtonText}>Year</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line}></View>

        {/*TODO*/}
             {/*Calendar*/}

        <View>
          </View>    
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
    height: '70%',
    backgroundColor: '#D8CEED',
    borderRadius: 5,
    marginTop: 80,
  },
  text: {
    fontFamily: 'poppins',
    fontSize: 20,
  },
  viewButton: {
    flexDirection: 'row',
    padding: 4,
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
  secondaryButtonText: {
    fontFamily: 'Poppins-Light',
    color: '#000',
    fontSize: 14,
    alignItems: 'center',
  },
  line: {
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginBottom: 20,
  },
  tasksPriority: {
    backgroundColor: '#C2B1E8',
    width: 80,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tasksPriorityText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
  },

  tasksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'start',
    padding: 20,
  },
  taskTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 22,
    color: '#000',
    width: '70%',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  taskDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#000',
    width: '70%',
    borderBottomWidth: 1,
    borderColor: '#000',
    marginTop: 5
  },
});
