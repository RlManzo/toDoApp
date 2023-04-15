import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'


export default function TaskItem({onPress, task, tarea}) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{task}</Text>
      <View style={{marginLeft:270, flexDirection: 'row', position:'absolute'}}>
      <TouchableOpacity style={styles.button} onPress={onPress}><Text  style={ styles.buttonX}>X</Text></TouchableOpacity>
      <TouchableOpacity  onPress={tarea} ><Image source={require('../img/checkdoit.jpg')} style={{width:30,height:30, marginLeft:5, borderRadius:15}}/></TouchableOpacity>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
      backgroundColor:'red',
      height: 30,
      width:30,
      borderRadius:15,
      
      
  }, buttonX:{
     left: 10,
     top:5,
     color:'white',
     
  },
  container:{
    alignItems: 'center',
       backgroundColor:'#212121',
       padding:10,
       flexDirection:'row',
       borderRadius: 25,
       marginBottom:5,
       marginLeft:10,
       marginRight:10,
       marginTop:3
       
  },
  text:{
    color:'white',
    marginLeft:10,
  },
})