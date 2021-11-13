/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable quotes */

import React, { Component } from 'react';
import { Text, Image, StyleSheet, Linking, Platform, TouchableOpacity } from 'react-native';
import { Surface, Headline } from 'react-native-paper';


export default class ERcall extends Component {

  makeCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${9867919668}';
    } else {
      phoneNumber = 'telprompt:${9867919668}';
    }

    Linking.openURL(phoneNumber);
  };

  render() {
    return (
                  <Surface
                    style={{
                    width: 100,
                    height: 60,
                    color:'white',
                    marginLeft:'auto',
                    marginRight:'auto',
                    bottom:50,
                    left:85,
                    padding:10,
                    backgroundColor: '#FF5959',
                    elevation:5,
                    borderRadius:80}}>
                    <TouchableOpacity onPress={this.makeCall}>
                        <Text style={styles.btnText}><Image source={require("../assets/telephone-call.png")} resizeMode='contain' style={{width:22,height:22}}/> CALL</Text>
                    </TouchableOpacity>
                    </Surface>
    );
  }
}

const styles = StyleSheet.create(
  {
    fElement: {
        alignItems: "center",
    },
    btnText:{
      fontSize:18,
      fontWeight:'bold',
      color:'white',
      paddingBottom:-30,
      marginRight:'auto',
      marginLeft:'auto',
      top:4
  },
  subtitle: {
    textAlign:'left',
    marginLeft:'auto',
    marginRight:'auto',
    fontSize: 22,
    marginTop:40,
    fontWeight: "bold",
    fontFamily:'Roboto',
    paddingTop:7},
  });
