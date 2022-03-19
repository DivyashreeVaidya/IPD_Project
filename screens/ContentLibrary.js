/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable quotes */



import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Button, Headline } from 'react-native-paper';

const ContentLibrary = ({navigation}) => {

    function videoHandler () {
        navigation.navigate('Video Library');
    }

    function audioHandler () {
        navigation.navigate('Audio Library');
    }


    return (
        <View style={styles.ePage}>
            <Image style={styles.hImg} source={require("../assets/contentlib.png")}/>
           <Headline style={styles.title}>What would you like to do today?</Headline>
           <Button 
               style={{backgroundColor:"#FF5959",padding:10,width:300,height:65,
               marginLeft:'auto',
               marginRight:'auto', marginBottom:0}}
               mode="contained"
               onPress={videoHandler}>
               <Text style={styles.btnText}> 
               WATCH 
               </Text>
               </Button>

               
               <Button  
               style={{backgroundColor:"#FF5959",padding:10,width:300,height:65,
               marginLeft:'auto',
               marginRight:'auto', marginBottom:50}}
               mode="contained"
               onPress={audioHandler}>
               <Text style={styles.btnText}> 
               LISTEN 
               </Text>
               </Button>   
        </View>
    )
}


const styles = StyleSheet.create({
    ePage: {
        flex: 1,
        backgroundColor: "#F9D157",
        justifyContent:'space-evenly'
    },
    hImg: {
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:10,
        width:350,
        height:250
    },    
    title: {
        textAlign:'left',
        marginLeft:'auto',
        marginRight:'auto',
        fontSize: 30,
        marginTop:10,
        fontWeight: "bold",
        fontFamily:'Roboto',
        paddingTop:7},
        btnText:{
            fontSize:20,
            fontWeight:'bold',
            color:'white',
            paddingBottom:10
        }
})

export default ContentLibrary;
