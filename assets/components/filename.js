import React from 'react'
import { Input } from 'react-native-elements';
import { View, Picker, Text, StyleSheet, TouchableOpacity, DrawerLayoutAndroid, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default function Filenme() {
    return (
      <View style={styles.container} >
         <View>
         </View>
         
         <View style={styles.card1}>
         <Text style={styles.text2}>File Name</Text>
         <Input style={styles.input1}
            placeholder='Voice Note_20/08/2020'
        />
        <Text style={styles.text2}>File Format</Text>
        <Picker
        style={styles.picker1}
      >
        <Picker.Item label="MP3 Audio" value="MP3 Audio" />
        <Picker.Item label="Vlc" value="vlc" />
        </Picker>
         <Button style={styles.button1}
   
              title="Save"        />
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
        paddingVertical: 18,
        borderWidth: 1,
        width:300,
        height:300,
        borderColor: "white",
        borderRadius: 16,
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
      fontSize: 17,
      paddingBottom:20,
      paddingLeft:15,
    },

 
button1 : {
 width:145,
 borderRadius:"3",
 marginLeft:70,
 paddingTop:'60',
 paddingLeft:15,
 color:'#E6E3E3'
},

input : {
    backgroundColor:'#E6E3E3',
    backgroundColor:'#E6E3E3',
    borderColor:'white',
    borderRadius:2,
},

picker1 : {
    paddingBottom:20,
    paddingTop:'55',
    elevation:0,
    marginRight:15,
    marginLeft:15,
    height:'20',
    backgroundColor:'#E6E3E3',
    borderColor:'white',
    borderRadius:2,
    marginBottom:30,
}

  });