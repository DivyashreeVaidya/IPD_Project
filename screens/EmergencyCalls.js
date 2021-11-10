/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Headline, Button } from 'react-native-paper';

const EmergencyCalls = ({navigation}) => {

    function videoHandler () {
        navigation.navigate('Video Library');
    }

    function audioHandler () {
        navigation.navigate('Audio Library');
    }


    return (
        <View style={styles.ePage}>
              <Headline style={styles.title}>Emergency Contacts</Headline>
        </View>
    )
}


const styles = StyleSheet.create({
    ePage: {
        flex: 1,
        backgroundColor: "#F9D157",
       
    },
    title: {
        textAlign:'left',
        marginLeft:'auto',
        marginRight:'auto',
        fontSize: 25,
        marginTop:40,
        fontWeight: "bold",
        fontFamily:'Roboto',
        paddingTop:7},
    buttonStyle:{backgroundColor:"#FF5959",padding:10,width:300,height:65,
    marginLeft:'auto',
    marginRight:'auto', marginBottom:0}
})

export default EmergencyCalls;
