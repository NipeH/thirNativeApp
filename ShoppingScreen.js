import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, FlatList,} from 'react-native';
import { Input, Button, ListItem } from 'react-native-elements';

import * as SQLite from 'expo-sqlite';

export default function ShoppingScreen ( {route, navigation}) {


const [product, setProduct] = useState('');
const [amount, setAmount] = useState('');
const [products, setProducts] = useState([]);

const db = SQLite.openDatabase('shoppinglistdb.db');

useEffect(() => {
  db.transaction(tx => {
    tx.executeSql('create table if not exists shoppinglist (id integer primary key not null, product text, amount text);');
  });
  updateList();    
}, []);


const saveItem = () => {
  db.transaction(tx => {
      tx.executeSql('insert into shoppinglist (product, amount) values (?, ?);', [product, amount]);    
    }, null, updateList
  )
  console.log();
}


const updateList = () => {
  db.transaction(tx => {
    tx.executeSql('select * from shoppinglist;', [], (_, { rows }) =>
      setProducts(rows._array)
    ); 
  });
}


const deleteItem = (id) => {
  db.transaction(
    tx => {
      tx.executeSql(`delete from shoppinglist where id = ?;`, [id]);
    }, null, updateList
  )    
}



        
     



return (

  
    <View>

     
       <View>

      <Input placeholder='product' label='PRODUCT'
        onChangeText={(product) => setProduct(product)}
        value={product}/>  
      <Input placeholder='amount' label='AMOUNT'
        onChangeText={(amount) => setAmount(amount)}
        value={amount}/>      

      <Button onPress={saveItem} title="SAVE" /> 
      

        
      {/* <FlatList 
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => 
        <View>
        <Text style={{fontSize: 18}}>{item.product}, {item.amount} 
        <Text style={{fontSize: 18, color: '#0000ff'}} onPress={() => deleteItem(item.id)}> Bought</Text>
        </Text>
      
        </View>} 
        data={products} 
      />     */}




        <View>
        <FlatList
       
        keyExtractor={item => item.id.toString()} 
        renderItem={({item}) => 
            <ListItem
            
            product={item.product}
            amount={item.amount}
            onPress={() => deleteItem(item.id)}
            
              
          />
        }
         data={products} 
        

            />

        </View> 



    </View>
            
            
  
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
