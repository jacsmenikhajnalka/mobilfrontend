import React from 'react';
import { Text, TextInput, View } from 'react-native';
const ipcim="192.168.1.207";
const kapcsolat = () => {

  return (
    <View>
      
    <View style={{
      width: '100%', height: 50, backgroundColor: 'powderblue'
    }} >


     <Text style={{alignSelf: 'center', fontSize:30 }}>Kezdőlap</Text>

    </View>

    <View style={{
      width: '100%', height: 100, backgroundColor: 'lightblue'
    }} >
      <Text style={{alignSelf: 'center', fontSize:30 }}>Záródolgozat</Text>
      
       </View>
    <View style={{
      width: '100%', height: 150, backgroundColor: 'steelblue'
    }} >
      <Text style={{alignSelf:'center', paddingTop: 150}}>&copy; Minden jog fentartva</Text>
      </View>
  </View>
  );
}

export default kapcsolat;