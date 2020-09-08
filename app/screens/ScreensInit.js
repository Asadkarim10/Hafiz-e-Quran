import React, { Component } from 'react';

import { StyleSheet, Text, View, Button, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import DrawerContent from '../components/DrawerContent';

import Home from './HomeScreen';
import Splash from './SplashScreen';

const { width } = Dimensions.get('window');

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const screenOptionStyle = {
  headerTransparent: true,
  headerTitle: null,
  headerLeft: null,
};
const StackSplash = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={
        {
          headerTransparent: true,
          headerTitle: null,
          headerLeft: null,
        }
      }>
      <Stack.Screen name="Splash" component={Splash} />
    </Stack.Navigator>
  );
}

const StackRoutes = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Home1" component={Splash} />
    </Stack.Navigator>
  );
}
const SettingStackNavigator = (navigation) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
    </Stack.Navigator>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Splash"
      drawerPosition="left"
      drawerContent={props => <DrawerContent {...props} />}
      drawerStyle={{ backgroundColor: '#fff', alignItems: 'center', width: (width * .75) }}
      drawerContentOptions={{
        activeTintColor: '#60f',
        inactiveTintColor: '#000',
      }}
    >
      <Drawer.Screen name="Splash" component={StackSplash}
        options={{ swipeEnabled: false }} />
      <Drawer.Screen name="Home" component={StackRoutes} />
      <Drawer.Screen name="Setting" component={SettingStackNavigator} />
    </Drawer.Navigator>
  );
}


export default () => {
  return <DrawerNavigator />
}