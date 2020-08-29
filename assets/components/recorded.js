import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, DrawerLayoutAndroid, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import Cards from './cards'

export default function Recorded() {
    return (
      <View style={styles.container} >
         <View>
             <Text style={styles.text1} >=</Text>
         </View>
         <View>
             <Text style={styles.text2}>Start a Recording</Text>
         </View>
         <View style={styles.icon}>
         <AntDesign name="stepbackward" size={24} color="white" />
             <Text  >Tap to stop</Text>
         </View>
         <View>
             <Text style={styles.text3}>00 : 15 : 34</Text>
         </View>
         <View>
             <Text style={styles.cards}><Cards /></Text>
         </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      width:350,
      paddingTop:100,
      paddingBottom:0,
    },
    icon: {
        backgroundColor:'#adff2f',
        alignItems: 'center',
        paddingVertical: 18,
        borderWidth: 4,
        color:'white',
        width:96,
        height:90,
        borderColor: "#adff2f",
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:155,
        marginTop:90,
        shadowColor: '#adff2f',
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

elevation: 24,
    },

    text1: {
      color: 'black',
      alignItems: 'center',
      justifyContent: 'right',
      paddingLeft:170,
      marginLeft:155,
      marginTop:-70,
    },

    text2: {
      color: 'black',
      fontWeight:'bold',
      fontSize: 20,
      paddingLeft: 30,

       
    },
    text3: {
      color: 'black',
      MarginTop:'190',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:70,
      fontSize: 50,
      margin:6,
      paddingBottom:165,
    },
    cards : {
    
      marginLeft:20,
    }
  });