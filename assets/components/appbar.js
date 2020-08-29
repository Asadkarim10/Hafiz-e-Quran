import * as React from 'react';
import { Appbar } from 'react-native-paper';
import Delete from './delete';
import { StyleSheet, Text, View } from 'react-native';

const Appbars = () => {
 

  return (
    <Appbar.Header  style={styles.appbar} >
      <Appbar.BackAction  style={styles.appbar1} />
      
      <Appbar.Action  style={styles.appbar2} icon="dots-vertical" onPress={Delete} />
    </Appbar.Header>
  );
};

export default Appbars;


const styles = StyleSheet.create({
  appbar1: {
    backgroundColor: 'white',
    
  },
  appbar2: {
    backgroundColor: 'white',
    alignSelf :'flex-end'
  },
  appbar: {
    backgroundColor:'white',
  }
});
