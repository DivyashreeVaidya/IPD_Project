/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, Headline } from 'react-native-paper';
import NavBar from '../components/NavBar';

const WellbeingTest = ({navigation}) => {


    return (
        <View style={styles.ePage}>
           <NavBar txt={true} text={"Weekly Check-In"} navigation={navigation} color={"#ffffff"}/>
            <View style={styles.question}>
            <Headline style={styles.title}>During the Past Week:
           </Headline>
           <Headline style={styles.title2}>Q.1] I was bothered by things that usually
           don't bother me. 
           </Headline></View>
           <Button 
               style={styles.buttonStyle}
               mode="contained">
               <Text style={styles.btnText}> 
               Rarely (1 Day or less)
               </Text>
               </Button>
               <Button 
               style={styles.buttonStyle}
               mode="contained">
               <Text style={styles.btnText}> 
               Some Days (1 - 2)
               </Text>
               </Button> 
               <Button  
               style={styles.buttonStyle}
               mode="contained">
               <Text style={styles.btnText}> 
               Occasionally (3 - 4) 
               </Text>
               </Button>
               <Button  
               style={styles.buttonStyle}
               mode="contained">
               <Text style={styles.btnText}> 
               Mostly / All Days 
               </Text>
               </Button>    
               <Button  
               style={styles.buttonStyle1}
               mode="contained">
               <Text style={styles.btnText}> 
               Next 
               </Text>
               </Button>
        </View>
    )
}


const styles = StyleSheet.create({
    ePage: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent:'space-around'
    },
    question: {
        backgroundColor: "#F9D157",
        height:150,
        width:350,
        borderRadius:10,
        padding:10,
        marginLeft:'auto',
        marginRight:'auto',
        alignContent:'center'
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
        marginTop:10,
        marginLeft:10,
        fontWeight: "bold",
        fontFamily:'Roboto',
        },
        title2: {
            textAlign:'left',
            marginLeft:'auto',
            marginRight:'auto',
            fontSize: 22,
            marginTop:15,
            marginLeft:20,
            fontWeight: "bold",
            fontFamily:'Roboto',
            },
    btnText:{
            fontSize:18,
            fontWeight:'bold',
            color:'white',
            paddingBottom:10
        },
    buttonStyle:{backgroundColor:"#FF5959",padding:10,width:300,height:65,
    marginLeft:'auto',
    marginRight:'auto', marginBottom:0},
    buttonStyle1:{backgroundColor:"#FF5959",padding:10,width:150,height:65, marginLeft:'auto',
    marginRight:'auto', marginBottom:0}
})

export default WellbeingTest;
