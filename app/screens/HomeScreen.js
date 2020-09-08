import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, DrawerLayoutAndroid, Image, StatusBar } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/FontAwesome';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    }} >
      <StatusBar backgroundColor='#009387' barStyle="light-content" />
      <View style={{
        color: 'white',
        flex: 1,
        width: wp('100%'),
        // backgroundColor: "yellow",
        marginTop: 100,
      }}>
        <View style={{
          color: 'white',
          // backgroundColor: "blue",
          flex: 4
        }}>
          <Text style={styles.text1} >=fdgdgd</Text>
        </View>
        <View style={{
          color: 'white',
          // backgroundColor: "red",
          flex: 8
        }} >
          <Text style={styles.text2}>Start a Recording</Text>
        </View>
      </View>
      <View style={{

        width: wp('100%'),
        backgroundColor: "orange",
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
        <View style={{
          backgroundColor: 'red',
          borderWidth: 4,
          width: 150,
          height: 150,
          borderColor: "red",
          borderRadius: 150 / 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Icon name="microphone" color="white" size={56} />
          <Text style={{
            color: "white",
            marginTop: 5,
            fontSize: 15,
          }}>Tap to record</Text>
        </View>

      </View>

      <View style={{
        flex: 1,
        color: 'white',
        width: wp('100%'),
        alignItems: 'center',
        // backgroundColor: "red"
      }}>
        <Text style={styles.text3}>00 : 00 : 00</Text>
      </View>
      <View style={{
        flex: 1,
        color: 'white',
        width: wp('100%'),
        alignItems: 'center',
        // backgroundColor: "purple"
      }}>
        <Text style={styles.text3}>00 : 00 : 00</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text1: {
    color: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    // backgroundColor: "brown",
    textAlign: "right",
    marginRight: 20
  },

  text2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    paddingLeft: 20,
    // backgroundColor: "black"
  },
  text3: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
  }

});