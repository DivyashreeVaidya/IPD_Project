/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Headline } from 'react-native-paper';

const AudioLibrary = ({navigation}) => {

    function videoHandler () {
        navigation.navigate('Video Library');
    }

    function audioHandler () {
        navigation.navigate('Audio Library');
    }


    return (
        <View style={styles.ePage}>
            <Image style={styles.hImg} source={require("../assets/audiolib.png")}/>
           <Headline style={styles.title}>What would you like to explore today?</Headline>
           <Button 
               style={styles.buttonStyle}
               mode="contained">
               <Text style={styles.btnText}> 
               Music
               </Text>
               </Button>
               <Button 
               style={styles.buttonStyle}
               mode="contained">
               <Text style={styles.btnText}> 
               AudioBooks 
               </Text>
               </Button> 
               <Button  
               style={styles.buttonStyle}
               mode="contained">
               <Text style={styles.btnText}> 
               Guided Meditations 
               </Text>
               </Button>
               <Button  
               style={styles.buttonStyle}
               mode="contained">
               <Text style={styles.btnText}> 
               Podcasts / Sleepcasts 
               </Text>
               </Button>    
        </View>
    )
}


const styles = StyleSheet.create({
    ePage: {
        flex: 1,
        backgroundColor: "#F9D157",
        justifyContent:'space-around'
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

export default AudioLibrary;
