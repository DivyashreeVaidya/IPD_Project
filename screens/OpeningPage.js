/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Surface, Text, Snackbar } from 'react-native-paper';

const OpeningPage = ({navigation}) => {

    function registerHandler () {
        navigation.navigate('Register');
    }


    return (
        <View style={styles.ePage}>
           <Image style={styles.hImg} source={require("../assets/opening_page-removebg-preview.png")}/>
           {/* <Button  
               style={{
                width: 300,
                height: 100,
                color:'white',
                marginLeft:'auto',
                marginRight:'auto',
                marginTop:120,
                padding:15,
                backgroundColor: '#FF5959'}}
                mode="contained" 
                onPress={registerHandler} 
               > Test button</Button> */}
               <TouchableOpacity onPress={registerHandler}>
                   <Surface
                   style={{
                    width: 300,
                    height: 100,
                    color:'white',
                    marginLeft:'auto',
                    marginRight:'auto',
                    marginTop:120,
                    padding:15,
                    backgroundColor: '#FF5959',
                    elevation:5,
                    borderRadius:30}}>
               <Text style={styles.btnText}>Create an Account {'\n'}Today </Text></Surface></TouchableOpacity>
               
        </View>
    )
}


const styles = StyleSheet.create({
    ePage: {
        flex: 4,
        backgroundColor: "#F9D157",
        
    },
    hImg: {
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:60
    },    
    btnText:{
        color:'white',
        fontSize:23,
        fontFamily:'Roboto',
        textAlign:'center'
    },
    container1: {
        top: 50,
        height: 200,
        width: 200,
        borderWidth: 8,
        alignSelf: "center",
        borderColor: "#FF5959",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    cText1: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
    },


    container2: {
        top: 90,
        height: 200,
        width: 200,
        borderWidth: 8,
        alignSelf: "center",
        borderColor: "#FF5959",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },

    cText2: {
        fontSize: 24,
        fontWeight: "700",
        textAlign: "center",
    },

})

export default OpeningPage;
