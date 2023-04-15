import { View, Text,Button, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, TextInput, Alert } from 'react-native'
import React from 'react'
import { useState } from 'react'
import TaskItem from './TaskItem'

export default function ToDo({navigation}){
  const [task, setTask] = useState('')
  const [addNew, setAddNew] = useState(false)
  const [tasks, setTasks] = useState([])
  const addTask = ()=>{
      setTasks(currentTasks => [...currentTasks, task])
      setTask('')
      setAddNew(false)
  }
  
  const deleteTask =(index)=>{
    let temp = [...tasks]
         temp.splice(index, 1)
    setTasks(temp)
  }
  const completeTask =(index)=>{
    let temp = [...tasks]
         temp.splice(index, 1)
    setTasks(temp)
     Alert.alert('completaste la tarea!')
  }
  return (
  <SafeAreaView >
    
     {
       addNew &&
     <>
      <View>
          <TextInput onChangeText={setTask} placeholder='Agregar tarea' style={styles.input} value={task}/>
      </View>
      <TouchableOpacity style={[styles.button, styles.acceptButton] } onPress={addTask}>
        <Text style={styles.buttonText}>Agregar</Text>  
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.cancelButton] } onPress={()=>setAddNew(false)}  >
        <Text style={styles.buttonText}>Cancelar</Text>  
      </TouchableOpacity>
     </> 
     }
     
     <View>
         <FlatList style={styles.flatList} data={tasks} keyExtractor={(item)=> item} renderItem={({item, index})=> <TaskItem task={item} index={index} tarea={()=> completeTask(index)} onPress={()=> deleteTask(index)}/>}/>
     </View>
      <View style={styles.addButton}>
       <TouchableOpacity  onPress={()=>setAddNew(true)}>
          <Text style={styles.addButtonText}>+</Text></TouchableOpacity >
      </View>      
      
    
  </SafeAreaView>
  )
  }
  
       
  const styles = StyleSheet.create({
      acceptButton:{ 
          backgroundColor: 'green',
          top:40,
  
      },
      flatList:{
         top: 15,
         backgroundColor: '#dedede',
         borderRadius: 5,
        
      },
      button:{
           padding:10,
           alignSelf:'flex-start',
           borderRadius:10,
           marginLeft: 20,
           marginTop:5,
      },
      buttonText:{
         color:'white',
         
      },
      cancelButton:{ 
          backgroundColor: 'red',
          left:75,
          top:-3,
          
      },
      addButton: {
        alignItems: 'center',
         height:50,
         width: 50,
         backgroundColor: 'green',
         borderRadius: 30,
         position:'absolute',
         marginTop: 470,
         left:280
      },
      addButtonText:{
            color: 'white',
            fontSize: 25,
            top: 6,
    
      },
      direction:{
        flexDirection:'row',
      },
    
    input:{
         top:30,
         padding: 10,
         backgroundColor: '#dedede',
        marginLeft: 15,
        marginRight: 15,
         borderRadius: 10,
  
    }
  })

 