import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SettingScreen from './SettingScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Keyboard piiloon
const DismissKeyboard = ({ children }) => (

          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            { children }
          </TouchableWithoutFeedback>
        ); 


export default function RecipeScreen( {route, navigation}) {

    const [results, setResults] = useState('');
    const [recipes, setRecipes] = useState([]);

    const getRecipes = () => {
   
        // Ei toimi. Tulostaa "Tried to get frame for out of ranger index NaN".

        const url = 'http://www.recipepuppy.com/api/?i='+results;
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => { 
            setRecipes(responseJson);
        })
        .catch((error) => { 
            Alert.alert('Error' , error); 
        }); 
        }

    const listSeparator = () => {
        return (
            <View
            style={{
                height: 1,
                width: "80%",
                backgroundColor: "#CED0CE",
                marginLeft: "10%"
            }}
            />
        );
        };

  return (
    <DismissKeyboard>
          <View style={styles.container}>
                    
                     <FlatList 
                      style={{marginLeft : "5%"}}
                      keyExtractor={item => item.id} 
                      
                      renderItem={({item}) => 
                      // tarvitaan kuvan listaus
                    
                      <Text>{item.thumbnail}, {item.title}</Text>} 
                      ItemSeparatorComponent={listSeparator}
                      data={recipes} 
                    />  
                    <TextInput 
                      style={{fontSize: 18, width: 200}} 
                      value={results} 
                      placeholder="search"
                      onChangeText={(results) => setResults(results)} 
                    />
                    <Button title="Find" onPress={getRecipes} />
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
  