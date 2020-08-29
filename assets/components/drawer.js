
import React from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';
import {Icon} from 'react-native-vector-icons/FontAwesome';
import { Foundation } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



const Drawer = () => {
  return (
    <View style={styles.container}>
    <View  style={styles.pic}>
      <Image source={{uri: 'https://ae01.alicdn.com/kf/HTB1GBy9kb1YBuNjSszhq6AUsFXaV/New-Design-Quran-Speaker-Digital-Holy-Qur-an-Player-Speaker-Mp3-Players-With-Remote-Controller-free.jpg_960x960.jpg'}}  
       style={{width:140, height: 140}} />
       <Text style={styles.text1}>HAFIZ QURAN</Text>
       <Text style={styles.text2}>The Quran recording app</Text>  
    </View>
        
        
    <View style={styles.part1}>
        <Text style={styles.text3} > <Foundation style={styles.icons} name="list-bullet" size={24}  />Your Recordings</Text>   
        <Text style={styles.text3} > <FontAwesome style={styles.icons} name="microphone" size={24}  />New Recording</Text>   
        <Text style={styles.text3}><FontAwesome5 style={styles.icons} name="mobile-alt" size={24}  /> About the app</Text>   
        <Text style={styles.text3}><FontAwesome style={styles.icons} name="question-circle" size={24}/>Report an issue</Text>   
        <Text style={styles.text3} ><Entypo style={styles.icons} name="share" size={24} color="black" />Share this app</Text>   
                    
    </View>    
    
    </View>
  );
}

export default Drawer;


const styles = StyleSheet.create({
    container: {
      paddingTop: 25,
  
    },
   pic:{
       marginTop:30,
       marginLeft:95,
       
   },
   text1 :{
      fontWeight:'bold',
      fontSize:22,
      marginLeft:-3,
   },
   text2 :{
      marginLeft:-4,
   },

   text3:{
    height: 50,
    borderTopColor:'black',
    borderTopWidth :1,
    paddingBottom:5,
    paddingTop:6,
    fontSize:22,
   },
   part1 :{
    marginLeft:30,
    marginTop:20,
    marginRight:30,

    borderBottomWidth :1,
   },


   icons : {
       marginRight:30,
       marginBottom:20,
       paddingTop: 7,
         
   }
  });