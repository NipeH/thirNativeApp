import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useTheme } from '@react-navigation/native';

import * as SQLite from 'expo-sqlite';

// Keyboard piiloon
const DismissKeyboard = ({ children }) => (

          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            { children }
          </TouchableWithoutFeedback>
        ); 

       

export default function CalendarTodo( {route, navigation}) {

  const [teksti, setTeksti] = useState('');
  const [todo, setTodo] = useState('');
  const [data, setData] = useState([]);
  const [todos, setTodos] = useState([]);
  const {asd} =route.params; // vastaanottaa tiedot    CalendarScreenista 
  const db = SQLite.openDatabase('calendardb1.db');

         // ---> TÄHÄN JOKIN FUNKTIO PÄIVITTÄMÄÄN TODO LISTA ENNEN "Save todo" painamista ???


         //Submits the todo text value and calendar's date
        /*   const submitButton = () => {
            const todo = asd + teksti;
            setTodo(todo)
            setData([...data, {todo}]);

          }  */

          // SQLite hommat
          
          // Creates SQLite tables for id, asd and teksti
          useEffect(()=> {
            db.transaction(tx => {
              tx.executeSql('create table if not exists todotable ( id integer primary key not null, todo text);');
            })
          }
          )
          // Update todolist
          const updateTodo = () => {
            db.transaction(tx => {
              tx.executeSql('Select * from todotable;', [], (_, { rows }) =>
              setTodos(rows._array)
              )
            })
          }
          // Save todo (replaces submitButton)
          const saveTodo = () => {
          const todo = asd + teksti; // LOPUKSI ASD JA TEKSI ERILLISIKSI PARAMETREIKSI
  
            db.transaction(tx => {
                tx.executeSql('insert into todotable (todo) values (?);', [todo]);    
              }, null, updateTodo
            )
            console.log();
          }

        

          // Delete todo
          const deleteTodo = (id) => {
            db.transaction(
              tx => {
                tx.executeSql('delete from todotable where id = ?;', [id]);
              }, null, updateTodo
            )
          }

          // listauksen välit
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

  return (
    <DismissKeyboard>
        
          <View style={styles.container}>
                    
               <Text>CalendarTodo</Text>
            
            <View style={styles.container}>
                 <Text>Chosen date {(asd)}</Text>

              <TextInput // Syötä TODO tai jtn tekstiä tietylle päivämäärälle 
              style={{width: 200,height:30, borderColor: 'gray', borderWidth: 2}}
              onChangeText={teksti => setTeksti(teksti)}
              value={teksti}
              
              />
                <Button title="Save todo" onPress={saveTodo}/> 
              
            </View>
            <View style ={styles.container}>

              {/*   Flatlist ilman SQLitea
              <FlatList // TOIMII tulostaa asdasdasd{teksti}

                  data={data}
                  renderItem={({item}) => (
                    
                    <Text>{item.todo}</Text>
                  )}
                  />
              */}
           
            <FlatList 
            style={{marginLeft : "0%"}}
            keyExtractor={item => item.id.toString()} 
            renderItem={({item}) => <View style={styles.listcontainer}>
              <Text style={{fontSize: 18}}>{item.id}.     {item.todo}</Text>
            <Text style={{fontSize: 18, color: '#FF0000'}} onPress={() => deleteTodo(item.id)}>        Delete</Text>
            <Text></Text>
            <Text style={{fontSize: 18, color: '#0000ff'}} onPress={() => updateTodo(item.id)}>        Edit</Text> 
            <Text></Text>

                                    </View>} // JOS SAIS VAIKKA EDIT -OMINAISUUDEN TOIMIMAAN
                                    
            data={todos} 
            ItemSeparatorComponent={listSeparator} 
            
          />   
            
            </View>
        
          </View>
    </DismissKeyboard>
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
  




/*  

//TOIMIVA FLATLIST TURVAAN


<DismissKeyboard>
        
  <View style={styles.container}>
            
       <Text>CalendarTodo</Text>
    
    <View style={styles.container}>
         <Text>{(asd)}</Text>

      <TextInput // Syötä TODO tai jtn tekstiä tietylle päivämäärälle 
      style={{width: 200,height:30, borderColor: 'gray', borderWidth: 2}}
      onChangeText={teksti => setTeksti(teksti)}
      value={teksti}
      
      />
        <Button title="Submit" onPress={submitButton}/> 
      
    </View>
    <View style ={styles.container}>

        <FlatList // TOIMII tulostaa asdasdasd{teksti}

          data={data}
          renderItem={({item}) => (
            
            <Text>{item.todo}</Text>
          )}
          />



    </View>

    </View>
</DismissKeyboard> */