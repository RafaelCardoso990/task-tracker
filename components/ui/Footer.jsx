import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../../providers/TablistProvider';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer() {
  const { page, setPage, modal, setModal } = useContext(AppContext);


  function setPageAndModal() {
    modal === true ? setModal(false) : setModal(true);
    setPage('<AddTask/>');
  }

  return (
    <View style={styles.container}>
      <View style={styles.shadowContainer}>
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setPage('<TasksByCalendar/>')}
          >
            <Icon
              style={styles.icon}
              name="calendar"
              size={30}
              color={'#fff'}
            />
          </TouchableOpacity>
         { modal === true ?  <TouchableOpacity
            style={styles.button}
            onPress={() => setPageAndModal()}
          >
            <Icon style={styles.icon} name="check" size={30} color={'#fff'} />
          </TouchableOpacity>: <TouchableOpacity
            style={styles.button}
            onPress={() => setPageAndModal()}
          >
            <Icon style={styles.icon} name="plus" size={30} color={'#fff'} />
          </TouchableOpacity>}
          <TouchableOpacity
            style={styles.button}
            onPress={() => setPage('<TasksByPriority/>')}
          >
            <Icon style={styles.icon} name="bars" size={30} color={'#fff'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    backgroundColor: '#FEF9FE',
    zIndex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  shadowContainer: {
    //Propertys to Android
    elevation: 10,
    //Propertys to IOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: '100%',
    height: 80,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  box: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5, // Para criar espaço para a sombra
  },
  text: {
    color: '#141414',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#7F56DA',
    width: 60,
    height: 60,
    borderRadius: 100,
  },
});
