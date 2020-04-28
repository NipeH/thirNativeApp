import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList } from 'react-native';
 



// second page history

export default function SettingScreen({route, navigation}) {

  const{first} = route.params;
  const{second} = route.params;
  const{sum} = route.params;
 
  

    return (
      <View style={styles.container}>
        <Text>Setting Screen</Text>
        
        <Text>{(first)}</Text>
        <Text>{(second)}</Text>
        <Text>{(sum)}</Text>
       





</View>
    );
}; 

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