import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from '@material-ui/core/Icon';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';


export default function Mcards() {
  return (
    <View >
       
       <View style={styles.card} >
           <View>
           <Text>title of the recording</Text>
           <Text>24/08/2020</Text> 
           </View>
           <View style={styles.card1} >
           <AccessAlarm />
           <AccessAlarm />
           <AccessAlarm />
           </View>
           
           
    </View>




       <View style={styles.card} >
       <View>
           <Text>title of the recording</Text> 
           </View>
           <View style={styles.card1} >
           <AccessAlarm />
           <AccessAlarm />
           <AccessAlarm />
           </View>
       </View>
       <View style={styles.card} >
       <View>
           <Text>title of the recording</Text> 
           </View>
           <View style={styles.card1} >
           <AccessAlarm />
           <AccessAlarm />
           <AccessAlarm />
           </View>
       </View>
       <View style={styles.card} >
       <View>
           <Text>title of the recording</Text> 
           </View>
           <View style={styles.card1} >
           <AccessAlarm />
           <AccessAlarm />
           <AccessAlarm />
           </View>
       </View>
       <View style={styles.card} >
       <View>
           <Text>title of the recording</Text> 
           </View>
           <View style={styles.card1} >
           <AccessAlarm />
           <AccessAlarm />
           <AccessAlarm />
           </View>
       </View>
       <View style={styles.card} >
       <View>
           <Text>title of the recording</Text> 
           </View>
           <View style={styles.card1} >
           <AccessAlarm />
           <AccessAlarm />
           <AccessAlarm />
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
    width:"80%",
    backgroundColor:"#gray",
    borderRadius:9,
    padding:10,
    marginLeft:50,
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
    
  }






});