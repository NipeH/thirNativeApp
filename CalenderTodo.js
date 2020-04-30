import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useTheme } from '@react-navigation/native';



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
  const {asd} =route.params; // vastaanottaa tiedot    CalendarScreenista 
  
  const {day} = route.params;

  const submitButton = () => {
    const todo = asd + teksti;
    setTodo(todo)
    setData([...data, {todo}]);

  }


  return (
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
  