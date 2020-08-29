
import React from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,

  },
 pic:{
     marginTop:50,
     marginLeft:110,
     
 },
 text1 :{
    fontWeight:'bold',
    fontSize:32,
    marginLeft:-19,
 },
 text2 :{
    marginLeft:15,
 }
});

const Home = () => {
  return (
    <View style={styles.container}>
    <View  style={styles.pic}>
      <Image source={{uri: 'https://ae01.alicdn.com/kf/HTB1GBy9kb1YBuNjSszhq6AUsFXaV/New-Design-Quran-Speaker-Digital-Holy-Qur-an-Player-Speaker-Mp3-Players-With-Remote-Controller-free.jpg_960x960.jpg'}}  
       style={{width:180, height: 160}} />
       <Text style={styles.text1}>HAFIZ QURAN</Text>
       <Text style={styles.text2}>The Quran recording app</Text>  
    </View>
    
    
    </View>
  );
}

export default Home;