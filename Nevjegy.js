import React from 'react';
import { Text, TextInput, View } from 'react-native';
//const ipcim="192.168.1.207";
const IP = require('./ipcim.js');
const kapcsolat = () => {

  return (
    <View>
      
    <View style={{
      width: '100%', height: 50, backgroundColor: '#40E0D0'
    }} >


     <Text style={{alignSelf: 'center', fontSize:30 }}>Nyitó oldal</Text>

    </View>

    <View style={{
      width: '100%', height: 500, backgroundColor: '#40E0D0'
    }} >
      <Text style={{alignSelf: 'stretch', fontSize:25 ,backgroundColor:'yellow'}}>Tartalmaz:</Text>
      <Text style={{alignSelf: 'stretch', fontSize:20 }}>Tipus menüt</Text>
      <Text style={{alignSelf: 'stretch', fontSize:20 }}>Könyv menüt</Text>
      <Text style={{alignSelf: 'flex-end', fontSize:20 ,backgroundColor:'yellow' }}>Készítette:Jacsmenik Hajnalka</Text>
      <Text style={{alignSelf: 'flex-end', fontSize:20 ,backgroundColor:'yellow'}}>5/13A</Text>



       </View>
  
  </View>
  );
}

export default kapcsolat;