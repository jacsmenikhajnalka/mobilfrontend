import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class Konyv extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={{padding: 10}}>
       
        <Text style={{padding: 10, fontSize: 42}}>
         Konyv
        </Text>
      </View>
    );
  }
}