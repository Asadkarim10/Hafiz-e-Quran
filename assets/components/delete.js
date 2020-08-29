import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Input } from 'react-native-elements';
import { View, Picker, Text, StyleSheet, TextInput, TouchableOpacity, DrawerLayoutAndroid, Image } from 'react-native'
import { Card, ListItem, Button,  } from 'react-native-elements'


export default function Delete() {
    return (
      <View style={styles.container} >
         <View>
         

         </View>
         
         <View style={styles.card1}>
         <Text style={styles.icons}>  <MaterialCommunityIcons name="delete-sweep" size={60} color="red" /> </Text>
         <Text style={styles.text2}>Are you Sure You Want to delete this file?</Text>
         <Text style={styles.text3}>Voice Note_08/08/2020</Text>

        
         <Button style={styles.button1}
   
              title="Delete"        />
         </View>    
         
      </View>
    );
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      width:350,
      paddingTop:80,
    },
    card1: {
        backgroundColor:'white',
        borderWidth: 2,
        width:300,
        height:300,
        borderColor: "white",
        borderRadius: 16,
        marginLeft:28,
        marginTop:20,
        shadowColor: 'grey',
        shadowOpacity: 4,
        shadowRadius: 16.00,
elevation: 24,
    },

    text2: {
      color: 'black',
      fontWeight:'bold',
      fontSize: 17,
      marginTop:25,
      paddingBottom:20,
      paddingLeft:15,
      marginLeft:15,
      marginRight:15,
      textAlign:'center',
    },
    
    icons: {
      marginTop:25,
      paddingLeft:15,
      marginLeft:15,
      marginRight:15,
      textAlign:'center',
    },

 
button1 : {
 width:170,
 paddingBottom:60,
 marginBottom:60,
 borderRadius:"5",
 marginLeft:55,
 paddingLeft:15,
 color:'#E6E3E3'
},

text3 : {
     marginBottom:20, 
      marginLeft:70,
      marginRight:15,
},



  });