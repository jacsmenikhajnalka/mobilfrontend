import React from 'react';
import {StyleSheet, FlatList, ActivityIndicator, Text, View, Image , TouchableOpacity } from 'react-native';

//const ipcim="192.168.1.207";
const IP = require('./ipcim.js');
export default class Tipusok extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      dataSource:[]
    
    }
  }

  szavazat=(szam)=>{
    //alert(szam)
    var bemenet={
      bevitel1:szam
    }

  fetch('http://'+IP.ipcim+':3000/szavazatfelvitel', {
      method: "POST",
      body: JSON.stringify(bemenet),
      headers: {"Content-type": "application/json; charset=UTF-8"}
    }
  
  )
  .then(x => x.text())
  .then(y => alert(y));

  }


  componentDidMount(){
    //alert("hello")
    
    return fetch('http://'+IP.ipcim+':3000/konyv_fajtai')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });
       // alert(JSON.stringify(this.state.dataSource))
      })
      .catch((error) =>{
        console.error(error);
      });
      
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20,backgroundColor:"#40E0D0"}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 

          <View >

          <Text style={{color:"purple",fontSize:26,textAlign:"center",marginTop:5,marginBottom:5}}   >{item.kony_fajtai} </Text>
        
          <Image source={{uri: 'http://'+IP.ipcim+':3000/'+item.konyvfajta_kepek}} style={{width:300,height:300,marginLeft:"auto",marginRight:"auto"}} />  

         
          </View>
        
        }

        
          keyExtractor={({konyv_id}, index) => konyv_id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
  kekgomb: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width:300,
    marginLeft:"auto",
    marginRight:"auto",
  }
});