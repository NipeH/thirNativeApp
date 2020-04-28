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


export default function NetworkScreen( {route, navigation}) {


const [desc, setDesc] = useState('');
const [location, setLocation] = useState('');
const [jobs, setJobs] = useState([]);

const getJobs = () => {
  const url = 'https://jobs.github.com/positions.json?description='+ desc + '&location=' + location;
  fetch(url)
  .then((response) => response.json())
  .then((responseJson) => { 
     setJobs(responseJson);
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
                      renderItem={({item}) => <Text>{item.title}, {item.company}</Text>} 
                      ItemSeparatorComponent={listSeparator}
                      data={jobs} 
                    />  
                    <TextInput 
                      style={{fontSize: 18, width: 200}} 
                      value={desc} 
                      placeholder="Description"
                      onChangeText={(desc) => setDesc(desc)} 
                    />
                    <TextInput 
                      style={{fontSize: 18, width: 200}} 
                      value={location} 
                      placeholder="Location"
                      onChangeText={(location) => setLocation(location)} 
                    />
                    <Button title="Find" onPress={getJobs} />



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
