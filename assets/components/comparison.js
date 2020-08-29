import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, DrawerLayoutAndroid, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
//import { Button } from 'react-native-elements';

export default function Comparison() {
    return (
      <View style={styles.container} >
         <View>
         </View>
         <View>
             <Text style={styles.text2}>Comparison</Text>
         </View>
         <View style={styles.card1}>
         <Text>References Text</Text>
         
         </View>

         <View style={styles.card1}>
         <Text>Your Text</Text>
         </View>
         
         <View style={styles.buttonview}>
             <Text >
             <Button style={styles.button1}
   
              title="Discard"
              
              />
             </Text>
             <Text>
             <Button style={styles.button2}
  
  title="Save"
  
/>
             </Text>
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
        alignItems: 'center',
        paddingVertical: 18,
        borderWidth: 1,
        width:300,
        height:250,
        borderColor: "white",
        borderRadius: 6,
        marginLeft:28,
        marginTop:70,
        shadowColor: 'grey',
        shadowOpacity: 4,
        shadowRadius: 16.00,
elevation: 24,
    },

   

    text2: {
      color: 'black',
      fontWeight:'bold',
      fontSize: 20,
      paddingLeft: 30,
    },
buttonview : {
  marginLeft:40,
  flex:1,
  flexDirection:'row',
  marginTop:50,
},
 
button1 : {
 width:145,
 borderRadius:"3"
},
button2 : {
  color:'#2100F3',
  width:145,
  paddingLeft:10,
},
  });
