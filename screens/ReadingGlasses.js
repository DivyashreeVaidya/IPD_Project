/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ScrollView, Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Headline, shadow } from 'react-native-paper';
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
         <Swiper style={styles.wrapper} showsButtons loop={false}>
         <View testID="Hello" style={styles.slide1}>
          <Image style={styles.hImg} source={require("../assets/reading1.jpg")}/> 
          <Headline style={styles.title}>Strain your eyes no more.</Headline>
         </View>
        <View testID="Beautiful" style={styles.slide2}>
        <Image style={styles.hImg} source={require("../assets/reading2.jpg")}/>
        <Headline style={styles.title2}>Scan anywhere, anytime.</Headline>
        <Button styles={styles.buttonStyle}>
            <Image source={require("../assets/camera.png")}
                    resizeMode='contain'
                    style={{width:40,
height:40,}}/> </Button>
        </View>
        </Swiper>      
        </View>
    )
}


const styles = StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:20,
        },
        shadowOpacity:1,
        shadowRadius:3.5,
        elevation:8
    },
    ePage: {
        flex: 1,
        backgroundColor: "#F9D157",
        justifyContent:'space-around',
        
    },
    wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9d157',
    top:-25
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9d157',
    top:8
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
    hImg: {
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:-70,
        width:350,
        height:300,
        ...shadow
    },    
    title: {
        textAlign:'left',
        fontSize: 40,
        marginTop:35,
        fontWeight: "bold",
        fontFamily:'Roboto',
        paddingTop:7},
        title2: {
            textAlign:'right',
            right:-30,
            fontSize: 40,
            marginTop:35,
            fontWeight: "bold",
            fontFamily:'Roboto',
            paddingTop:7},
    btnText:{
            fontSize:18,
            fontWeight:'bold',
            color:'white',
            paddingBottom:10
        },
    buttonStyle:{backgroundColor:"#FF5959",padding:10,width:120,height:40,
    marginLeft:'auto',
    marginRight:'auto'}
})

export default ReadingGlasses;
