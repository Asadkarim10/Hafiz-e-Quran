import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import Home from './assets/components/home'
 import Recording from './assets/components/recording'
//import Drawer from './assets/components/record';
// import Comparison from './assets/components/comparison';
 //import Filename from './assets/components/filename';
 //import Delete from './assets/components/delete';
//import Hafiz from './assets/components/hafiz';
import Drawer from './assets/components/drawer';
//import Cards from './assets/components/cards'
//import Mcards from './assets/components/mcards'



export default function App() {
  return (
    <View >
       
       <Drawer />
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
