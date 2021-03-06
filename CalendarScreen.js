import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {CalendarList} from 'react-native-calendars'; // https://github.com/wix/react-native-calendars

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function CalendarScreen( {route, navigation}) {
              
              const [pvm, setPvm] =useState('');
              const [data, setData] = useState([]);

              const dayPressed = (date) => {
                const pvm = date.day + '.' + date.month + '.' + date.year + ' ';
                setPvm(pvm)
                setData([...data, {pvm}]);
                Alert.alert(pvm , 'date selected');
                
              }
  return (
    
        
         <View style={styles.container}>
                  
                  <CalendarList
                    // https://github.com/wix/react-native-calendars <-- DOCUMENTS ABOUT THIS CALENDAR!

                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={1}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={12}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}

                    onDayPress={(day) => {
                      dayPressed(day), day}
                      
                    }

                    //onDayPress={({dateString}) => showDayTest(dateString)}
                        
                     // prints object on console
                    showWeekNumbers={true}
                    minDate={new Date} // can't click dates in past
                    maxDate={'2020-12-31'} // change this to dynamic + 12 Months
                    
                    />

                    
                    <FlatList // Sends date data CalenderTodo.js
                           data={data}
                           renderItem={({item}) => (
                             navigation.navigate('Todo', item)>
                           <Text>testi{item.pvm}</Text>
             
                         
                         )}
                        /> 
        
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
  