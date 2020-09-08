
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather, AntDesign, FontAwesome5, FontAwesome, Entypo, MaterialCommunityIcons, Ionicons, Fontisto } from '@expo/vector-icons';

import { Divider, Avatar, Title } from 'react-native-paper';

const { width } = Dimensions.get('window');

const DrawerContent = (props) => {


  return (
    <DrawerContentScrollView {...props}>
      <View>
        <View style={{ 
          alignItems: 'center', 
          flex: 5,
          backgroundColor: "yellow",
          marginTop: 100
          //  width: (width * .75) 
        }}
           >
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Image
              source={require('../assets/logo.png')}
              style={{
                width: ( 150 ),
                height: (150 )
              }}
            />
          </TouchableOpacity>

        </View>
      </View>
    </DrawerContentScrollView>

  );
}

export default DrawerContent;