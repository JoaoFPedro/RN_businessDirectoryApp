import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from '@/constants/Colors';

export default function _layout() {
  return (
<Tabs screenOptions={{headerShown: false, tabBarActiveTintColor: Colors.PRIMARY}} >
    <Tabs.Screen name='home' options={{
      tabBarLabel: 'Home',
      tabBarIcon:({color}) => <FontAwesome name="home" size={24} color={color} />
    }}/>
    <Tabs.Screen name='explore' options={{
      tabBarLabel: 'Explore',
      tabBarIcon: ({color}) => <MaterialIcons name="explore" size={24} color={color} />
    }}/>
    <Tabs.Screen name='profile' options={{
      tabBarLabel: 'Profile',
      tabBarIcon: ({color}) => <MaterialCommunityIcons name="face-man-profile" size={24} color={color} />
    }}/>
</Tabs>
  )
}