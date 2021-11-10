/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Headline } from 'react-native-paper';
import Swiper from 'react-native-swiper'

const ReadingGlasses = ({navigation}) => {

    function videoHandler () {
        navigation.navigate('Video Library');
    }

    function audioHandler () {
        navigation.navigate('Audio Library');
    }


    return (
        <View style={styles.ePage}>
            <Image style={styles.hImg} source={require("../assets/reading1.jpg")}/> 
            <Image style={styles.hImg} source={require("../assets/reading2.jpg")}/>  
        </View>
    )
}


const styles = StyleSheet.create({
    ePage: {
        flex: 1,
        backgroundColor: "#F9D157",
        justifyContent:'space-around'
    },
    wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
    hImg: {
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:10,
        width:250,
        height:200
    },    
    title: {
        textAlign:'left',
        marginLeft:'auto',
        marginRight:'auto',
        fontSize: 25,
        marginTop:-10,
        fontWeight: "bold",
        fontFamily:'Roboto',
        paddingTop:7},
    btnText:{
            fontSize:18,
            fontWeight:'bold',
            color:'white',
            paddingBottom:10
        },
    buttonStyle:{backgroundColor:"#FF5959",padding:10,width:300,height:65,
    marginLeft:'auto',
    marginRight:'auto', marginBottom:0}
})

export default ReadingGlasses;
