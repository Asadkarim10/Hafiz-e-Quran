//import Card from 'react-native-shadow-cards';
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
//import { Row } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Cards extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
        <Icon name="forward" size={25} color="" />
          <View style={styles.header}>
            <Text>Playback</Text>          
          </View>
         
        </View>

        <View style={styles.card}>
        <Icon name="rocket" size={25} color="" />
          <View style={styles.header}>
          
            <Text>Convert To Text</Text>          
          </View>
         
        </View>


        <View style={styles.card}>
        <Icon name="forward" size={25}  />
          <View style={styles.header}>
            <Text style={styles.text1}>Save</Text>          
          </View>
         
        </View>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    paddingTop: "80",
    marginLeft:'20',
    alignItems:"center"
  },
  card:{
    height:70,
    width:"30%",
    backgroundColor:"white",
    elevation:7,
    padding:8,
    paddingLeft:20,
    marginLeft:5,
    marginRight:5,
    shadowOpacity: .50,
    shadowRadius: 7,
    shadowColor: "#000",
    borderRadius:'1',
  },
  
  header: {
    flexDirection:"row",
  }
,
  text1: {
    fontSize: 20,
    
  }
});








