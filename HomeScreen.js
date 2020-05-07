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


export default function HomeScreen( {route, navigation}) {

const [first, setFirst] = useState('');
const [second, setSecond] = useState('');
const [sum, setSum] = useState('');
const [text, setText] = useState('');
const [data, setData] = useState([]);
const [data1, setData1] = useState([]);
const [data2, setData2] = useState([]);

// PLUS
const buttonPressed1 = () => {
  const sum = parseInt(first) + parseInt(second);
  setSum(parseInt(first)+parseInt(second))
  setData([...data, {sum}]);
  
  //test
  setData1([...data1, {first}]);
  setData2([...data2, {second}]);


//toimii mutta ei käytä flatlistiii
  /* navigation.navigate('Settings', {
    first,
    second,
    sum 
    
  });
  */

}


// MINUS
const buttonPressed2 = () => {
  const sum = parseInt(first) - parseInt(second);
  setSum(parseInt(first)-parseInt(second))
  setData([...data, {sum}]);

}

// History 
const buttonPressed3 = () => {
  setData([...data, {sum}]);
  navigation.navigate('Settings', sum);
  
}
// NetworkScreen
const buttonPressed4 = () => {
  navigation.navigate('Networks');
  
}

// Excercise 7 Recipe Finder
const buttonPressed5 = () => {
  navigation.navigate('Recipes');
  
}

// MAP
const buttonPressed6 = () => {
  navigation.navigate('Map');
  
}

// Convert
const buttonPressed7 = () => {
  navigation.navigate('Convert');
  
}

// CalendarScreen
const buttonPressed8 = () => {
  navigation.navigate('Calendar');
  
}

// CalendarScreen
const buttonPressed9 = () => {
  navigation.navigate('Todo');
  
}

// CourseScreen
const buttonPressed10 = () => {
  navigation.navigate('Courses');
  
}

// ShoppingScreen
const buttonPressed11 = () => {
  navigation.navigate('Shopping');
  
}












  return (
    <DismissKeyboard>
      <View style={styles.container}>
          
          <View style={styles.container}>
            <Text>LASKIN NATIVE APP</Text>
        
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
        
                    <Button title="+" onPress={buttonPressed1}/> 
                    <Button title="-" onPress={buttonPressed2}/> 
                    <Button title="History" onPress={buttonPressed3}/> 
                    <Button title="Networks" onPress={buttonPressed4}/> 
                    <Button title="Recipes" onPress={buttonPressed5}/> 
                    <Button title="Map" onPress={buttonPressed6}/> 
                    <Button title="Convert" onPress={buttonPressed7}/> 
                    <Button title="Calendar" onPress={buttonPressed8}/> 
                    <Button title="Todo" onPress={buttonPressed9}/> 
                    <Button title="Courses" onPress={buttonPressed10}/> 
                    <Button title="Shopping" onPress={buttonPressed11}/> 


          
                    {/* <Button
                      title ="History"
                      onPress={() => navigation.navigate('Settings')}
                      />
                    */}

                



            </View> 
  
      <View style={styles.container}>
             
                <FlatList 
              data={data}
              renderItem={({item}) => (
                navigation.navigate('Settings', item)>
              <Text>{item.first}{item.second}={item.sum}</Text>

            
            )}
              /> 
              
              {/* testi */}
               <FlatList 
              data1={data1}
              renderItem={({item1}) => (
                navigation.navigate('Settings', item1)>
              <Text>{item1.first}</Text>

            
            )}
              /> 
 
      </View>
     
  
  </View>
    </DismissKeyboard>
  );
}


/* 
import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList, TouchableWithoutFeedback, Keyboard } from 'react-native';
import SettingScreen from './SettingScreen';
import { NavigationEvents } from 'react-navigation';


// Keyboard piiloon
const DismissKeyboard = ({ children }) => (

  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    { children }
  </TouchableWithoutFeedback>
); 


// first page calculator


export default function HomeScreen({navigation}){


  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [sum, setSum] = useState('');
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  

  // PLUS
  const buttonPressed1 = () => {
    const sum = parseInt(first) + parseInt(second);
    setSum(parseInt(first)+parseInt(second))
    setData([...data, {sum}]);
  }
  // MINUS
  const buttonPressed2 = () => {
    const sum = parseInt(first) - parseInt(second);
    setSum(parseInt(first)-parseInt(second))
    setData([...data, {sum}]);
  
  }


    return(


      <DismissKeyboard>
<View style={styles.container}>
    
    <View style={styles.container}>
       <Text>LASKIN NATIVE APP</Text>
  
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
  
          <Button title="+" onPress={buttonPressed1}/> 
              <Button title="-" onPress={buttonPressed2}/> 
              <Button title="ASD" onPress={() => navigation.navigate('SettingScreen', {sum: 24})}/> 
      </View> 
  
      <View style={styles.container}>
             
                <FlatList 
              data={data}
              renderItem={({item}) => 
              <Text>{first}{second}={item.sum}</Text>}
              />
            
      </View>
     
  
  </View>
  </DismissKeyboard>
    );
}; 
 */
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
