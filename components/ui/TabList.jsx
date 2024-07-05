import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AddTask from '../footerScreens/addTask';
import TasksByPriority from '../footerScreens/tasksByPriority';
import TasksByCalendar from '../footerScreens/tasksByCalendar';
import { AppContext } from '../../providers/TablistProvider';

export default function TabList() {
  const { page, setPage, modal, setModal } = useContext(AppContext);
  console.log(page);
  const renderScreen = () => {
    switch (page) {
      case '<AddTask/>':
        return <AddTask />;
      case '<TasksByPriority/>':
        return <TasksByPriority/>;
      case '<TasksByCalendar/>':
        return <TasksByCalendar/>;
      default:
        return;
    }
  };

  return <View style={styles.container}>{renderScreen()}</View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hidden: {
    display: 'none',
  },
  text: {
    color: 0,
  },
});
