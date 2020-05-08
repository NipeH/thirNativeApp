import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, View, Alert, TextInput, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Input, Button, Text, Icon} from 'react-native-elements';
import * as SQLite from 'expo-sqlite';

// Hide Keyboard
const DismissKeyboard = ({ children }) => (

          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            { children }
          </TouchableWithoutFeedback>
        ); 

export default function CalendarTodo( {route, navigation}) {

  const [teksti, setTeksti] = useState('');
  
  const [data, setData] = useState([]);
  const [todos, setTodos] = useState([]);
  const {pvm} =route.params; // receives data from   CalendarScreen
 
  
  const db = SQLite.openDatabase('calendardb3.db'); // SQLite Database

         // ---> TÄHÄN JOKIN FUNKTIO PÄIVITTÄMÄÄN TODO LISTA ENNEN "Save todo" painamista ???
          
         // SQLite
          // Creates SQLite tables for id, pvm and teksti
          useEffect(()=> {

            db.transaction(tx => {
              tx.executeSql('create table if not exists todotable ( id integer primary key not null, pvm text, teksti text);');
            })
          }
          )
          
          // Save todo 
          const saveTodo = () => {
            if(pvm == null){

              Alert.alert('You need to select date first!')
            } else {
            db.transaction(tx => {
                tx.executeSql('insert into todotable (pvm, teksti) values (?, ?);', [pvm, teksti]);    
              }, null, updateTodo
            )
            Alert.alert('New item created to '+pvm);
            console.log();
          }}
          // Update todolist
          const updateTodo = () => {

            db.transaction(tx => {
              tx.executeSql('select * from todotable;', [], (_, { rows }) =>
              setTodos(rows._array)
              )
            })
            
          }
        
          // Delete todo
          const deleteTodo = (id) => {
            Alert.alert('Item deleted');
            db.transaction(
              tx => {
                tx.executeSql('delete from todotable where id = ?;', [id]);
              }, null, updateTodo
            )
            
          }

         
          return (
            <DismissKeyboard>
                
                  <View>
                            
                      <Text h2 style={{textAlign: 'center'}}>Calendar Todo</Text>
                      <Text h5 style={{textAlign: 'center'}}>Write here your tasks</Text>
                    
                    <View>
                      <Text></Text>
                      
                      <Input placeholder={(pvm)} // Syötä jtn tekstiä tietylle päivämäärälle, joka tallentuu tietokantaan
                      
                      onChangeText={teksti => setTeksti(teksti)}
                      value={teksti}
                      />
                        <Button title="Save New" onPress={saveTodo}/> 
                        <Button title="Refresh" 
                                type="outline"
                                onPress={updateTodo} /> 

                      
                    </View>
                    <View>

                  
                    <FlatList 
                    keyExtractor={item => item.id.toString()} 
                    renderItem={({item}) => <View>
                      <Text>{item.id}.     {item.pvm} - {item.teksti} </Text>
                    <Text style={{fontSize: 18, color: '#0000ff'}} onPress={() => updateTodo(item.id)}>         Edit <Text style={{fontSize: 18, color: '#FF0000'}} onPress={() => deleteTodo(item.id)}>Delete</Text>
                      </Text> 
                    <Text></Text>
                    </View>} // Edit Kesken         
                      data={todos} 
                      />   
                    
                      {/*   Flatlist ilman SQLitea
                      <FlatList // TOIMII tulostaa asdasdasd{teksti}

                          data={data}
                          renderItem={({item}) => (
                            
                            <Text>{item.pvm}{item.teksti}</Text>
                          )}
                          />
                      */}
                    </View>
                
                  </View>
            </DismissKeyboard>
          );
  }




  // react-native-elements korvaa
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
  




