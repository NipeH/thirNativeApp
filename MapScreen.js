import React, {Component, useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, FlatList, TouchableWithoutFeedback } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
 
// Keyboard piiloon

  

// Map 

export default function MapScreen({navigation}) {

const [mapData, setMapData] = useState([]);
const [locations, setLocations] = useState('');
   


// TEE TÄMÄ LOPPUUN  - HAKEE GEOCODE ADDRESS DATAN

const getMapData = () => {
    console.log(getMapData);
    const url = 'https://www.mapquestapi.com/geocoding/v1/address?key=c8i3bkA5DUnRAr0KVOQV5S8IOKhPU5TY&inFormat=kvp&outFormat=json&locations='+ locations;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => { 
       setMapData(responseJson);
    })
    .catch((error) => { 
      Alert.alert('Error' , error); 
    }); 
    
}



    return (
   
      <View style={styles.container}>
       
    {/*     <MapView 
            style={styles.container}
            initialRegion={{
                latitude:60.200692,
                longitude:24.934302,
                latitudeDelta:0.0322,
                longitudeDelta:0.0221,
                 }} >

        <Marker
            coordinate={{
                latitude:60.201373, 
                longitude: 24.934041
                }}
                title='Haaga-Helia'
                />
                
        </MapView>  */}
            <View style={styles2.container}>

                    <FlatList 
                    
                     style={{marginLeft : "5%"}}
                     keyExtractor={item => item.id} 
                     renderItem={({item}) => 
                     <Text>{item.location}, {item.latLng.lat},{item.latLng.lng}</Text>} 
                     data={mapData} 
                    />  

                <TextInput style={{width: 350,height:30, borderColor: 'gray', borderWidth: 1}} 
                value={locations}
                onChangeText={(locations) => setLocations(locations)}
                    />
                <Button title="Haku" onPress={getMapData}/>    
            </View>
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