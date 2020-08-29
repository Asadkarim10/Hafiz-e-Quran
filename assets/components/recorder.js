import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, DrawerLayoutAndroid, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';


export default function Recorder() {
    return (
      <View style={styles.container} >
         <View>
             <Text style={styles.text1} >=</Text>
         </View>
         <View>
             <Text style={styles.text2}>Start a Recording</Text>
         </View>
         <View style={styles.icon}>
         <FontAwesome name="microphone" size={24} color="white" />
             <Text>Tap to record</Text>
         </View>
         <View>
             <Text style={styles.text3}>00 : 00 : 00</Text>
         </View>
         <View>
         
  style={{
    borderBottomColor: 'green',
    borderBottomWidth: 2,
  }}

         </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      width:380,
      paddingTop:100,
      paddingBottom:500,
    },
    icon: {
        backgroundColor:'red',
        alignItems: 'center',
        paddingVertical: 18,
        borderWidth: 4,
        width:98,
        height:67,
        borderColor: "red",
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:155,
        marginTop:70,
    },

    text1: {
      color: 'white',
      alignItems: 'center',
      justifyContent: 'right',
      paddingLeft:170,
      marginLeft:155,
      marginTop:-70,
    },

    text2: {
      color: 'white',
      fontWeight:'bold',
      fontSize: 20,
      paddingLeft: 30,

       
    },
    text3: {
      color: 'white',
      paddingTop:'50',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft:70,
        marginTop:70,
        fontSize: 50,
        margin:6,
    }

  });
  