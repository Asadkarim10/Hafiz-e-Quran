import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from '@material-ui/core/Icon';
import { MaterialIcons } from '@expo/vector-icons'; 
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { Entypo } from '@expo/vector-icons';


export default function Mcards() {
  return (
    <View >
       <View >
         <Text style={styles.text2}>Your Recording</Text>
        </View>
       
       <View style={styles.card} >
           <View>
           <Text>title of the recording <MaterialIcons style={styles.icons} name="delete" size={24} color="gray" /> <Entypo name="share" size={24} color="grey" /> <Entypo name="heart" size={24} color="red" /> </Text>
           <Text>24/08/2020</Text> 
           </View>
           <View style={styles.card1} >
          
           </View>        
    </View>
       <View style={styles.card} >
       <View>
           <Text>title of the recording <MaterialIcons style={styles.icons} name="delete" size={24} color="gray" /> <Entypo name="share" size={24} color="grey" /> <Entypo name="heart" size={24} color="red" /></Text> 
           <Text>24/08/2020</Text>
           </View>
           <View style={styles.card1} >
           
           </View>
       </View>
       <View style={styles.card} >
       <View>
           <Text>title of the recording <MaterialIcons style={styles.icons} name="delete" size={24} color="gray" /> <Entypo name="share" size={24} color="grey" /> <Entypo name="heart" size={24} color="red" /></Text> 
           <Text>24/08/2020</Text>
           </View>
           <View style={styles.card1} >
           
           </View>
       </View>
       <View style={styles.card} >
       <View>
           <Text>title of the recording <MaterialIcons style={styles.icons} name="delete" size={24} color="gray" /> <Entypo name="share" size={24} color="grey" /> <Entypo name="heart" size={24} color="red" /></Text> 
           <Text>24/08/2020</Text>
           </View>
           <View style={styles.card1} >
           
           </View>
       </View>
       <View style={styles.card} >
       <View>
           <Text>title of the recording <MaterialIcons style={styles.icons} name="delete" size={24} color="gray" /> <Entypo name="share" size={24} color="grey" /> <Entypo name="heart" size={24} color="red" /></Text> 
           <Text>24/08/2020</Text>
           </View>
           <View style={styles.card1} >
           
           </View>
       </View>
       <View style={styles.card} >
       <View>
           <Text>title of the recording <MaterialIcons style={styles.icons} name="delete" size={24} color="gray" /> <Entypo name="share" size={24} color="grey" /> <Entypo name="heart" size={24} color="red" /></Text> 
           <Text>24/08/2020</Text>
           </View>
           <View style={styles.card1} >
           
           </View>
       </View>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  card:{
    flex:1,
    flexDirection:'row',
    height:100,
    width:"90%",
    backgroundColor:"#F6F6F6",
    borderRadius:9,
    padding:10,
    marginLeft:20,
    marginRight:20,
    marginTop:20,
    elevation:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5, 
  },

  card1:{
    flex:1,
    flexDirection:'row',
    alignItems:'flex-end',
    
  },

  text2:{
    fontSize:22,
    paddingTop:50,
    marginLeft:20,
  },

  icons: {
    paddingLeft:90,
  }
});