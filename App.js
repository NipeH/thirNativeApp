import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList, TouchableOpacity } from 'react-native';


import * as SQLite from 'expo-sqlite';

import { NavigationContainer } from '@react-navigation/native';
//import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import NetworkScreen from './NetworkScreen';
import RecipeScreen from './RecipeScreen';
import MapScreen from './MapScreen';
import ConvertScreen from './ConvertScreen';
import CalendarScreen from './CalendarScreen';
import CalenderTodo from './CalenderTodo';
import CourseScreen from './CourseScreen'; 
import ShoppingScreen from './ShoppingScreen';

const Stack = createStackNavigator();




export default function App() {



  return (
   
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home">

            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Settings" component={SettingScreen} />
            <Stack.Screen name="Networks" component={NetworkScreen} />
            <Stack.Screen name="Recipes" component={RecipeScreen} />
            <Stack.Screen name="Map" component={MapScreen} />
            <Stack.Screen name="Convert" component={ConvertScreen} />
            <Stack.Screen name="Calendar" component={CalendarScreen}  />
            <Stack.Screen name="Todo" component={CalenderTodo}  />
            <Stack.Screen name="Courses" component={CourseScreen}  />
            <Stack.Screen name="Shopping" component={ShoppingScreen}  />

           
       </Stack.Navigator>



  
    </NavigationContainer>








  );
}





/* const AppNavigator = createBottomTabNavigator({

      Home: {screen: HomeScreen},
      Settings: {screen: SettingScreen}


},

{
  defaultNavigationOptions: ({ navigation })   => ({
    tabBarIcon: ({   focused, tintColor})   => {const{ routeName} = navigation.state;
    
    if (routeName === 'Home') {
      return <Ionicons name ='md-home' size={25} color={tintColor}/>;
    
    } else if  (routeName === 'Settings') { 
        return <Ionicons name ='md-settings' size={25 } color={tintColor} />;
      }
    }
  })

});



  const AppContainer = createAppContainer(AppNavigator);
  
export default function App() {

  

  return ( 
  
  <View style={styles2.container}>
   <AppContainer/>
  
  </View>
  
  );
  
  } */
  
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
  
  
  
  
  
 

{/* <View style={styles.container}>

<View style={styles.container}>


    <Text>Result: {sum} </Text>

    <TextInput
    style={{width: 200,height:30, borderColor: 'gray', borderWidth: 2}}
    onChangeText={first => setFirst(first)}
    value={first}
    keyboardType={'numeric'}
     />
      <TextInput
    style={{width: 200,height:30, borderColor: 'gray', borderWidth: 2}}
    onChangeText={second => setSecond(second)}
    value={second}
    keyboardType={'numeric'}
     />    
  </View> 

  <View style={styles2.container}>
          <Button title="+" onPress={() => setSum(parseInt(first)+parseInt(second)) }/> 
          <Button title="-" onPress={() => setSum(parseInt(first)-parseInt(second)) }/> 
          
  </View>

  <View style={styles2.container}>
        <FlatList 
        data={data}
        renderItem={({item}) =>
        <Text>{item.key}</Text>}
  />
  </View>


  <View style={styles2.container}>
    
  </View>

</View>
 */}




//Laskin exercise 3

//    const sum = first + second;
//    const text = first + second + sum;
//    setResult(sum);
//    setHistory([...history, txt]);





/* 

export default function App() {


  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [sum, setSum] = useState('');
  
  
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  
  
  
  
  
  const buttonPressed = () => {
    setData([...data, {key:text}]);
    setText('');
  }
  
  
  return ( 
  
  <View style={styles.container}>
  
    <View style={styles.container}>
  
        <TextInput
        style={{width: 200,height:30, 
        borderColor: 'gray', borderWidth: 2}}
        onChangeText={text => setText(text)}
        value={text}
         />
      </View> 
  
      <View style={styles2.container}>
              <Button title="Press me"  
              onPress={buttonPressed}/> 
      
      </View>
  
      <View style={styles2.container}>
            <FlatList 
            data={data}
            renderItem={({item}) =>
            <Text>{item.key}</Text>}
      />
      </View>
  
  
      <View style={styles2.container}>
        
      </View>
   
  </View>
  
  );
  
  }


*/


















/*  <View style={styles.container}>
      <TextInput
      style={{width: 200,height:30, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => setText(text)}
      value={text}
       />
       
      

      <Image style={{width:250, height:300}}
      source={require('./assets/ricardo.jpg')} />

      <Button onPress={buttonPressed} title="Press me"/>

    </View> */