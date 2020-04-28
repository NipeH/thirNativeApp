import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';


import * as SQLite from 'expo-sqlite';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'; // https://github.com/wix/react-native-calendars
import SettingScreen from './SettingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSafeArea } from 'react-native-safe-area-context';





export default function CourseScreen( {route, navigation}) {

//SQLITE Demo
const [credit, setCredit] = useState('');
const [title, setTitle] = useState('');
const [pvm, setPvm] = useState(''); //lisäys päivämäärä kalenterisovellusta varten
const [courses, setCourses] = useState([]);
const db = SQLite.openDatabase('coursedb_3.db');

useEffect(() => {
  db.transaction(tx => {
    tx.executeSql('create table if not exists course (id integer primary key not null, credits int, title text, pvm text);');
  });
  updateList();    
}, []);

// Save course
const saveItem = () => {
  db.transaction(tx => {
      tx.executeSql('insert into course (credits, title, pvm) values (?, ?, ?);', [parseInt(credit), title, pvm]);    
    }, null, updateList
  )
  console.log();
}

// Update courselist
const updateList = () => {
  db.transaction(tx => {
    tx.executeSql('select * from course;', [], (_, { rows }) =>
      setCourses(rows._array)
    ); 
  });
}

// Delete course
const deleteItem = (id) => {
  db.transaction(
    tx => {
      tx.executeSql(`delete from course where id = ?;`, [id]);
    }, null, updateList
  )    
}

const listSeparator = () => {
  return (
    <View
      style={{
        height: 10,
        width: "80%",
        backgroundColor: "#fff",
        marginLeft: "10%"
      }}
    />
  );
};
//SQLITE demo päättyy





return (

  
    <View style={styles.container}>



      {/* SQL LITE DEMOA */}
       <View style={styles.container}>

      <TextInput placeholder='Title' style={{marginTop: 30, fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(title) => setTitle(title)}
        value={title}/>  
      <TextInput placeholder='Credits' keyboardType="numeric" style={{ marginTop: 5, marginBottom: 5,  fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(credit) => setCredit(credit)}
        value={credit}/>      

    <TextInput placeholder='Pvm' style={{marginTop: 30, fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(pvm) => setPvm(pvm)}
        value={pvm}/>     



      <Button onPress={saveItem} title="Save" /> 
      <Text style={{marginTop: 30, fontSize: 20}}>Courses</Text>
      <FlatList 
        style={{marginLeft : "5%"}}
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => <View style={styles.listcontainer}><Text style={{fontSize: 18}}>{item.title}, {item.credits}, {item.pvm}</Text>
        <Text style={{fontSize: 18, color: '#0000ff'}} onPress={() => deleteItem(item.id)}> Done</Text></View>} 
        data={courses} 
        ItemSeparatorComponent={listSeparator} 
      />      
    </View>
            
            
  
      </View>

);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
}); 

const styles2 = StyleSheet.create({
container: {
flex: 1,
flexDirection: 'row',
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'space-around',

},
}); 


const styles3 = StyleSheet.create({
container: {
flex: 2,
flexDirection: 'row',
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
}); 
