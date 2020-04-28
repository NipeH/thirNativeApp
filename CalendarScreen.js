import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars'; // https://github.com/wix/react-native-calendars
import SettingScreen from './SettingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Keyboard piiloon
const DismissKeyboard = ({ children }) => (

          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            { children }
          </TouchableWithoutFeedback>
        ); 



export default function CalendarScreen( {route, navigation}) {

const showDayTest =(date) =>{
  alert(date);
  navigation.navigate('Todo')
}
 





  return (
    <DismissKeyboard>
        
          <View style={styles.container}>
                  
                  <CalendarList
                    // Callback which gets executed when visible months change in scroll view. Default = undefined
                    onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    pastScrollRange={1}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={24}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}




                    //onDayPress={(day) => {console.log('selected day', day)}
                    onDayPress={({dateString}) => showDayTest(dateString)}
                        
                
                     // prints object on console
                    showWeekNumbers={true}
                    minDate={new Date} // can't use anything in past
                    maxDate={'2020-12-31'} 
                    />

                   

           
        
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
  