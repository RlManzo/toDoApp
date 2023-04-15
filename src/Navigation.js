import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home'
import ToDo from './ToDo'
const Stack = createNativeStackNavigator()
export default function Navigation() {
  return (
    
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='ToDo' component={ToDo}/>
    </Stack.Navigator>
   
  
  )
}