import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList, TouchableWithoutFeedback, ActivityIndicator} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
 


// Euro Converter

export default function ConvertScreen({navigation}) {


    const [rates, setRates] = useState([]);
    const [data, setData] = useState([]);

    const [isLoading, setLoading] = useState(true);
    // const [data, setData] = useState([]);
  
    // useEffect(() => {
    //   fetch('https://reactnative.dev/movies.json')
    //     .then((response) => response.json())
    //     .then((json) => setData(json.movies))
    //     .catch((error) => console.error(error))
    //     .finally(() => setLoading(false));
    // });
    
    useEffect(() => {

      fetch('http://data.fixer.io/api/latest?access_key=778bba34a9a20cf56779381c16b75018&format=1')
      .then((response) => response.json())
      .then((json) => setRates(json.rates))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    })
    console.log();

/*       
    const getData = () => {

        const url = 'http://data.fixer.io/api/latest?access_key=778bba34a9a20cf56779381c16b75018';
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => { 
           setData(responseJson);
        })
        .catch((error) => { 
          Alert.alert('Error' , error); 
        }); 
      }  */
    
    return (
    
      <View style={styles2.container}>
        
        <Text>ConvertScreen</Text>
          
          
   
              
              
              <Text>{rates}</Text>
      </View>

      
         
        
   
     
   

    );
}; 


const styles = StyleSheet.create({
  container: {
    flex: 3,
   
  },
}); 



const styles2 = StyleSheet.create({
    container: {
      flex: 1 ,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      
      
    },
 
  }); 


/* 
  export default function ConvertScreen() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('https://reactnative.dev/movies.json')
        .then((response) => response.json())
        .then((json) => setData(json.movies))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    });
  
    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              
              
              <Text>{item.id}, {item.title}, {item.releaseYear}</Text>
            )}
          />
        )}
      </View>
    );
  }; */