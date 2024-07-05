import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/ui/Header';
import globalStyles from '../assets/styles/globalStyles';
import Bubble from '../components/ui/Bubble';
import Footer from '../components/ui/Footer';
import TabList from '../components/ui/TabList';
import { AppContext } from '../providers/TablistProvider';

export default function HomeScreen() {

  const { modal, setModal } = useContext(AppContext);
  
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <Text style={styles.h2}>Hey Rafael!</Text>
      <Text style={styles.h4}>Good Morning</Text>
      <Text style={styles.h4Space}>here's what on the list today</Text>
      <Bubble positionStyle={styles.topRight} />
      <Bubble positionStyle={styles.bottomLeft} />
      <Footer />
      {/* footerScreen */}
      {modal === true ? <TabList/> : <></>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  topRight: {
    position: 'absolute',
    top: 70,
    right: -50,
  },
  bottomLeft: {
    position: 'absolute',
    bottom: -120,
    left: -50,
  },
  h2: {
    fontFamily: 'Poppins-Light',
    fontSize: 28,
    textAlign: 'center',
    color: '#000000',
    padding: 20,
    marginTop: 100,
  },
  h4: {
    fontFamily: 'Poppins-Light',
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',    },
  h4Space: {
    fontFamily: 'Poppins-Light',
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 20,
  },
});
