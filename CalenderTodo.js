import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';



// Keyboard piiloon
const DismissKeyboard = ({ children }) => (

          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            { children }
          </TouchableWithoutFeedback>
        ); 

       

export default function CalendarTodo( {route, navigation}) {


  const [data, setData] = useState([]);
  const {asd} =route.params; //vastaanottaa tiedot CalendarScreenista
  const {day} = route.params;




  return (
    <DismissKeyboard>
        
          <View style={styles.container}>
                    
               <Text>CalendarTodo</Text>
            
            <View style={styles.container}>
                 <Text>{(asd)}</Text> {/* tulostaa tuodun  */}
                 <Text>{(day)}</Text>



                {/* tämä flatlist tallentaa datan, myöhemmin SQliteen */}
                <FlatList

                  data={data}
                  renderItem={({item}) => (
                    
                    <Text>testi{item.asd}{item.day}</Text>
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
  