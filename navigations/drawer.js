import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const drawer = createDrawerNavigator()
const DrawerNavigator=()=>{
     return(
          <Drawer.Navigator>
          <Drawer.Screen name="Home" component="TabNavigator"/> 
          <Drawer.Screen name="Profile" component="profileone"/>
          </Drawer.Navigator>
     )
}
export default DrawerNavigator;