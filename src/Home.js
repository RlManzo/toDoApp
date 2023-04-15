import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
export default function Home({navigation}) {
  return( 
  <View>
       <Image source={require('../img/4697260.png')} style={styles.principal}/>
       <TouchableOpacity style={styles.buttonStart} onPress={()=> navigation.navigate('ToDo')}>
        <Text style={styles.textStart}>Start</Text>
        </TouchableOpacity>    
       </View>   
  )
}

const styles = StyleSheet.create({
    principal:{
        width:150,
        height:150,
        top:150,
        left:105
    },
    textStart:{
        color: 'white',
        left:23,
        top:5
    },
    buttonStart:{
        backgroundColor:'green',
        height:30,
        width:80,
        borderRadius:15,
        position:'absolute',
        top:320,
        left:140
    }
})